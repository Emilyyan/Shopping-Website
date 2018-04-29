import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material';
import { element } from 'protractor';
import { DataSource } from '@angular/cdk/collections';
import { DecimalPipe } from '@angular/common';
import {CartItem} from '../interfaces';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  cartitems : CartItem[];
  constructor(private httpClient:HttpClient){  }
  //ds = new MatTableDataSource(this.cartitems);
  subTotal = 0;
  itemsCnt = 0;

  ngOnInit() {
    this.httpClient.get(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Cart`)
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          this.cartitems = data;
        }
      },
      error => console.log("Error: ", error),
      () => {
        this.calcSubTotal(); 
        this.countItems();
      }
    )
  }

  displayedColumns = ['product', 'quantity', 'price', 'total_price'];

  private calcSubTotal(){
    let s = 0;
      for(let e of this.cartitems){
        s += (e.price * e.quantity);
      }
    this.subTotal = s;
  }
  
  private countItems(){
    let count = 0;
      for(let e of this.cartitems){
        count += e.quantity;
      }
    this.itemsCnt = count;
  }

  updateCart(){
    this.httpClient.post(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Cart`, this.cartitems)
      .subscribe(
        res => console.log(res),
        error => console.log(error),
        () => {
          this.calcSubTotal();
          this.countItems();
        }
      ); 
  }
}

