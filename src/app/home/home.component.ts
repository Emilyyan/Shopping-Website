import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  products : Product[];
  constructor(private httpClient:HttpClient, public dialog: MatDialog){  }

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

  openDetail(PID) {
    const dialogRef = this.dialog.open(ProductDetailComponent, {
      height: '60%',
      width: '60%',
      data: {
        PID: PID
      }
    });
  }
}

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  desc: string;
  img: string;
}