import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { MatPaginator} from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material';
import { OrderDetailComponent } from '../order-detail/order-detail.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //user: User;
  user = [];
  selectedState = "";
  localAddress = [];
  formGroup1: FormGroup;//for saved address tab
  formGroup2: FormGroup;//for userinfo tab
  displayedColumns = ['date', 'number', 'status', 'detail'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private httpClient:HttpClient, private _formBuilder: FormBuilder, public dialog: MatDialog){  }

  ngOnInit() {
    this.formGroup1 = this._formBuilder.group({
      state: ['', Validators.required],
      city: ['', Validators.required],
      address1: ['', Validators.required],
      zip: ['', Validators.required],
      phone: ['', Validators.required]
    });

    this.formGroup2 = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    //id should be replaced by the return value from server side
    //get user info for info and address tabs
    this.httpClient.get(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Users?id=1`)
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          console.log(data[0]);
          this.user = data[0];
          this.localAddress  = data[0].address;
          this.selectedState = data[0].address.state;
        }
      }, 
      error => console.log("Error", error)
      //() => {this.xxx();}
    );

    //order history should be returned from server side after authentication
    //get order info for order history tab
    this.httpClient.get(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Orders`)
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          this.dataSource.data = data;
          //console.log(this.dataSource.data);
        }
      }, 
      error => console.log("Error", error)
      //() => {this.xxx();}
    )

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //update user info tab
  update = function(userinfo) {
    if(this.formGroup2.valid){
    //below link if only for testing front end logic
      this.httpClient.post(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Users`, {email: userinfo.email, first_name: userinfo.firstName, last_name: userinfo.lastName})
     //this.httpClient.post(`/register-users`, {email: user.email, first_name: user.firstName, last_name: user.lastName})
        .subscribe(
          res => console.log(res)
        )
    }
  }

  //update saved address info tab
  updateAddress = function(changedAddress) {
    //below link if only for testing front end logic
    if(this.formGroup1.valid){
      this.httpClient.post(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Users`, {changedAddress})
      //this.httpClient.post(`/register-users`, {email: user.email, first_name: user.firstName, last_name: user.lastName})
        .subscribe(
          res => console.log(res)
        )
    }
  }

  viewDetail = function(order_number){
    console.log(order_number);
    const dialogRef = this.dialog.open(OrderDetailComponent, {
      height: '60%',
      width: '60%',
      data: {
        order_number: order_number
      }
    });

  }

  states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

}
