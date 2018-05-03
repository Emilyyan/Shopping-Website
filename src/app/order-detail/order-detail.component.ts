import { Component, OnInit, Inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Order, CartItem , Product} from '../interfaces';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  order: Order;
  products = [];
  productArray = [];


  constructor(private httpClient:HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.httpClient.get(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Orders/?orderNumber=${this.data.order_number}`)
    .subscribe(
      (orderInfo:any[]) => {
        if(orderInfo.length) {
          this.order = orderInfo[0];
          //console.log(this.order);
        }
      },
      error => console.log("Error", error)
    ), 

    this.httpClient.get(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Products`)
    .subscribe(
      (data:any[]) => {
        if(data.length){
          this.products = data;
          //console.log(this.products);
        }
      },
      error => console.log("Error", error),
      () => {
        for(let p of this.order.products){
          let obj = this.getProductDetail(p.pid);
          let orderitem: CartItem = {
            pid: p.pid,
            quantity: p.quantity,
            name: obj.name,
            price: obj.price
          }

          this.productArray.push(orderitem);
        }
      
        //console.log(this.productArray);
        console.log(this.productArray);
      }
    )
  
  }

  private getProductDetail(pid: number){
    /*for(let i in this.products.id){
      if(i === pid){

      }
    }*/
    let index = this.products.findIndex(x => x.id === pid);
    return this.products[index];
  }
}


