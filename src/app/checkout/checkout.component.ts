import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormControl } from '@angular/forms/src/model';
import {User, Order} from '../interfaces';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  profile: User;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  fname: string;
  lname: string;
  addr1: string;
  addr2: string = "";
  selectedState: string;
  city: string;
  zip: number;
  phone: number;

  private fillAddress(){
    this.fname = this.profile.firstName;
    this.lname = this.profile.lastName;
    this.addr1 = this.profile.address.addr_1;
    this.addr2 = this.profile.address.addr_2;
    this.selectedState = this.profile.address.state;
    this.city = this.profile.address.city;
    this.zip = this.profile.address.zip;
    this.phone = this.profile.address.phone;
  }

  constructor(private _formBuilder: FormBuilder, private httpClient:HttpClient) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      addr: ['', Validators.required],
      zip: ['', Validators.required],
      phone: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.httpClient.get(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Users?id=3`)
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          this.profile = data[0];
        }
      },
      error => console.log("Error: ", error),
      () => {
 
      }
    )
  }
  order: Order;
  /*export interface Order{
      products: CartItem[];
      total_prices: number;
      status: string;
  }*/
  onSubmit(f: NgForm){
    if(f.invalid){
      this.httpClient.post(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Order`, this.order)
      .subscribe(
        res => console.log(res),
        error => console.log(error),
        () => {
        }
      ); 
    }
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
