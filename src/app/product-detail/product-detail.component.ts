import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  p = {
    name: "", 
    stock: 0,
    price: 0,
    img: "",
    desc: ""
  };

  constructor(private httpClient:HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }
 

  ngOnInit() {
   // will log the entire data object
   //console.log(this.data.PID);

   this.httpClient.get(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Products/?id=${this.data.PID}`)
    .subscribe(
      (userInfo:any[]) => {
        if(userInfo.length) {
          console.log(userInfo[0]);
          this.p.name = userInfo[0].name;
          this.p.stock = userInfo[0].stock;
          this.p.price = userInfo[0].price;
          this.p.img = userInfo[0].img;
          this.p.desc = userInfo[0].desc;
        }
      }
    )

  }

}
