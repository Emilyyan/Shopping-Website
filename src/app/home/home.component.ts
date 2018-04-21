import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  products = [];
  constructor(private httpClient:HttpClient){  }
  

  ngOnInit() {
    this.httpClient.get(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Products`)
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          console.log(data);
          this.products = data;
        }
      }
    )
  }

}
/*
export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  desc: string;
  img: string;
}

const PRODUCT_DATA: Product[] = [
  {id: 1, name: 'Game 1', price: 12.99, stock: 15, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  {id: 2, name: 'Game 2', price: 11.99, stock: 16, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  {id: 3, name: 'Game 3', price: 12.99, stock: 12, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  {id: 4, name: 'Game 4', price: 12.99, stock: 0, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  {id: 5, name: 'Game 5', price: 5.99, stock: 15, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  {id: 6, name: 'Game 6', price: 10.12, stock: 15, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  {id: 7, name: 'Game 7', price: 15.99, stock: 34, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  {id: 8, name: 'Game 8', price: 18.99, stock: 15, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  {id: 9, name: 'Game 9', price: 12.99, stock: 93, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  {id: 10, name: 'Game 10', price: 16.99, stock: 15, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  {id: 11, name: 'Game 11', price: 16.99, stock: 35, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  {id: 12, name: 'Game 12', price: 10.88, stock: 15, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'}
];*/
