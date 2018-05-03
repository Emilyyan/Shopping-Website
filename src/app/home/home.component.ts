import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { Product, CartItem } from '../interfaces';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { StockAlertComponent } from '../stock-alert/stock-alert.component';
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  products : Product[];
  cart: CartItem[];
  email : string = "sp@gmail.com"; //user email (session)
  constructor(private httpClient:HttpClient, public dialog: MatDialog){  }

  ngOnInit() {
    this.httpClient.get(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Products`)
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          //console.log(data);
          this.products = data;
        }
      }
    );

    this.httpClient.get(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Cart?email=${this.email}`, {observe: 'response'})
    .subscribe(
      (data) => {
        console.log(data.status);
        //if(data.body[0].length) {
        this.cart = data.body[0].items;
          //console.log(data.body[0]);
          //console.log(this.cart);
        //}
      }
    );
  }

  private openDetail(PID: number) {
    const dialogRef = this.dialog.open(ProductDetailComponent, {
      height: '60%',
      width: '60%',
      data: {
        PID: PID
      }
    });
  }

  /**
   * Get stock of a product with pid
   * return true if the quantity doesn't exceed stock
   */
  private validQuantity(PID: number, quantity: number){
    let s = this.products.find(x => x.id === PID).stock;
    if(s < quantity){
      this.dialog.open(StockAlertComponent, {width: '40%'});
      return false;
    }
    return true;
  }

  /**
   * Add product to cart and send POST request
   */
  private addToCart(PID: number){
    //find quantity of product with pid
    //console.log(this.cart);
    let idx = this.cart.findIndex(x => x.pid === PID);
    //if that item wasn't in cart => check stock, then add to cart with quantity 1  
    if(idx >= 0){
      if(!this.validQuantity(PID, this.cart[idx].quantity+1))
        return;
      this.cart[idx].quantity += 1;    
    }//else => check stock, then increase quantity by 1
    else{
      if(!this.validQuantity(PID, 1))
        return;
      this.cart.push({pid: PID, quantity: 1});
    }
    this.httpClient.post(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Cart`, {email: this.email, items: this.cart})
    .subscribe(
      (data) => console.log(data)
    );    
  }

  
}