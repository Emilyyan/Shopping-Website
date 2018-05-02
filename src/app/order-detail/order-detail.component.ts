import { Component, OnInit, Inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Order } from '../interfaces';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  order: Order;

  constructor(private httpClient:HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.httpClient.get(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Orders/?orderNumber=${this.data.order_number}`)
    .subscribe(
      (orderInfo:any[]) => {
        if(orderInfo.length) {
          this.order = orderInfo[0];
          console.log(this.order);
        }
      }
    ), 
    error => console.log("Error", error)

  }

}
