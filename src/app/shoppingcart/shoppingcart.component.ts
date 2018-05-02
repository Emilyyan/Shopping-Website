import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatDialog} from '@angular/material';
import { element } from 'protractor';
import { DataSource } from '@angular/cdk/collections';
import { DecimalPipe } from '@angular/common';
import { CartItem } from '../interfaces';
import { getOrCreateContainerRef } from '@angular/core/src/render3/di';
import { StockAlertComponent } from '../stock-alert/stock-alert.component';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  cartitems : CartItem[];
  subTotal : number = 0;
  itemsCnt : number = 0;
  
  constructor(private httpClient:HttpClient, public dialog: MatDialog){  }

  ngOnInit() {
    // example user email: sp@gmail.com
    this.getCart("sp@gmail.com")
      .then( data => {
        let promises = [];  //create a list of promises
        this.cartitems = data[0].items;
        
        for(let item of this.cartitems){
          promises.push(this.getProduct(item));
        }
        //do calculations only after all promises in the list are resolved
        Promise.all(promises).then( _ => {
          this.calcSubTotal(this.cartitems); 
          this.countItems(this.cartitems);
        });
      })
      .catch(
        err => console.log("Error: "+ err)
      );
  }

  /* 
    Make a GET request to retrieve cart items from server
    Given the user email, would return a promise.
  */
  private getCart(email: string){
    let promise = new Promise((resolve, reject) => {
      let apiURL = `https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Cart?email=${email}`;
      this.httpClient.get(apiURL)
        .toPromise()
        .then(
          data => {
            resolve(data);
          },
          err => {
            reject();
          }
        );
    });
    return promise;
  }

  /* 
    Make a GET request to retrieve product information from server
    Given the pid, would return a promise.
  */
  private getProduct(item: CartItem){
    let promise = new Promise((resolve, reject) => {
      let apiURL = `https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Products?id=${item.pid}`;
      this.httpClient.get(apiURL)
        .toPromise()
        .then(
          data => {
            item.name = data[0].name;
            item.price = data[0].price;
            item.stock = data[0].stock;
            resolve(data);
          },
          err => {
            reject();
          }
        );
    });
    return promise;
  }

  /*
    Make a POST request to send updated cart items to server
  */
  private updateCart(){
    if(this.isValid(this.cartitems)){
      this.httpClient.post(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Cart`, this.cartitems)
      .subscribe(
        res => console.log(res),
        error => console.log(error),
        () => {
          this.calcSubTotal(this.cartitems);
          this.countItems(this.cartitems);
        }
      ); 
    } 
  }
  
  /*
    Check if the quantity selected is below stock
   */
  private isValid(items: CartItem[]){
    for(let item of items){
      if(item.quantity > item.stock){
        this.openAlert();
        return false;
      }
    }
    return true;
  }

  displayedColumns = ['product', 'quantity', 'price', 'total_price'];

  /**
   * Open dialog for stock alert
   */
  private openAlert(){
    const dialogRef = this.dialog.open(StockAlertComponent, {
      width: '40%'
    });
  }

  /*
    Calculate Subtotal in cart
   */
  private calcSubTotal(items: CartItem[]){
    let s = 0;
      for(let item of items){
        s += (item.price * item.quantity);
      }
    this.subTotal = s;
  }
  /*
    Count items in cart
   */
  private countItems(items: CartItem[]){
    let count = 0;
      for(let item of items){
        count += item.quantity;
      }
    this.itemsCnt = count;
  }
}