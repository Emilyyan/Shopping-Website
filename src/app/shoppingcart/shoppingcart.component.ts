import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { element } from 'protractor';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  displayedColumns = ['product', 'quantity', 'price', 'total_price'];
  ds = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.ds.filter = filterValue;
  }
  reduceByOne(quantity: number){
    //quantity--;
    console.log(quantity);
  }
  increaseByOne(quantity: number){
    //quantity++;
    console.log(quantity);
  }
  calcSubTotal(){
    let subtotal = 0;
    for(let e of ELEMENT_DATA){
      subtotal += (e.price * e.quantity);
    }
    return subtotal;
  }
  countItems(){
    let count = 0;
    for(let e of ELEMENT_DATA){
      count += e.quantity;
    }
    return count;
  }
}

export interface Element {
  product: string;
  quantity: number;
  price: number;
}

const ELEMENT_DATA: Element[] = [
  {product: 'Game 2', quantity: 2, price: 12.99},
  {product: 'Game 5', quantity: 1, price: 5.99},
  {product: 'Game 6', quantity: 3, price: 10.12}
];

