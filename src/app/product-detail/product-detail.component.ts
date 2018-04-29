import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private httpClient:HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }
 

  ngOnInit() {
   this.httpClient.get(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Products/?id=${this.data.PID}`)
    .subscribe(
      (userInfo:any[]) => {
        if(userInfo.length) {
          console.log(userInfo[0]);
        }
      }
    )

  }

}
