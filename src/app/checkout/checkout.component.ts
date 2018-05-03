import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl, AbstractControl } from '@angular/forms/src/model';
import { User, CartItem, Order, Address, Product } from '../interfaces';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  email: string = "sp@gmail.com"; //logged in user email account (session)
  profile: User; // User object retrieved from server
  cart: CartItem[];
  // Initialize the Order object to be sent to server
  order: Order = {products: this.cart, shipping: null, status: "processing"};
  products: Product[] = [];
  productArray: CartItem[] = [];
  formGroup: FormGroup;
  subTotal: number = 0;

  dataSource = new MatTableDataSource<any>();

  /* 2-way binding FORM data */
  fname: string;
  lname: string;
  addr1: string;
  addr2: string = "";
  selectedState: string;
  city: string;
  zip: number;
  phone: number;
  /* Returns a FormArray with the name 'formArray' */
  get formArray(): AbstractControl | null {
    return this.formGroup.get('formArray');
  }

  constructor(private _formBuilder: FormBuilder, private httpClient:HttpClient) { }

  displayedColumns = ['name', 'quantity', 'price'];

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          fname: ['', Validators.required],
          lname: ['', Validators.required],
          state: ['', Validators.required],
          city: ['', Validators.required],
          addr1: ['', Validators.required],
          addr2: [''],
          zip: ['', Validators.required],
          phone: ['', Validators.required]
        }),
        this._formBuilder.group({
          payment: ['', Validators.required]
        })
      ])
    });

    /* Get saved address for a user email account */
    this.httpClient.get(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Users?email=${this.email}`)
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          this.profile = data[0];
        }
      },
      error => console.log("Error: ", error),
      () => { }
    );

    /* Get cart items for a user email account 
    this.httpClient.get(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Cart?email=${this.email}`)
    .subscribe(
      (data: any[]) => {
        if(data.length) {
          // add cart items to the order
          this.order.products = data[0].items;
          this.cart = data[0].items;
        }
      }
    );*/
    this.getCart(this.email).then(_ =>{
      return this.getProducts();
    }).then(_ =>{
      for(let p of this.cart){
        let obj = this.getProductDetail(p.pid);
        let citem: CartItem = { pid: p.pid, quantity: p.quantity, name: obj.name, price: obj.price };
        this.productArray.push(citem);
        this.subTotal += citem.quantity * citem.price;
      }
      this.dataSource.data = this.productArray;
    });

  }
  
  /* 
    Make a GET request to retrieve all cart items of a user from server
    Given the user email, would return a promise.
  */
  private getCart(email: string){
    let promise = new Promise((resolve, reject) => {
      let apiURL = `https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Cart?email=${email}`;
      this.httpClient.get(apiURL)
        .toPromise()
        .then(
          (data: any[]) => {
            if(data.length) {
              // add cart items to the order
              this.order.products = data[0].items;
              this.cart = data[0].items;
            }
            resolve();
          },
          err => {
            reject();
          }
        );
    });
    return promise;
  }

  /* 
    Make a GET request to retrieve a list of products from server
    Would return a promise.
  */
  private getProducts(){
    let promise = new Promise((resolve, reject) => {
      let apiURL = `https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Products`;
      this.httpClient.get(apiURL)
        .toPromise()
        .then(
          (data:any[]) => {
            this.products = data;
            resolve();
          },
          err => {
            reject();
          }
        );
    });
    return promise;
  }

  /**
   * Given the product id,
   * Would return an object containing all details for that product
   */
  private getProductDetail(pid: number){
    let index = this.products.findIndex(x => x.id === pid);
    return this.products[index];
  }

  onSubmit(f: NgForm){
    // validate the form on submission
    if(f.invalid === false){
      let formAddress = {addr_1: this.addr1, addr_2: this.addr2, state: this.selectedState, city: this.city, zip: this.zip, phone: this.phone};
      // generate an order
      this.order.shipping = formAddress;
      console.log(this.order);
      this.httpClient.post(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Orders`, this.order)
      .subscribe(
        res => {},
        error => console.log(error),
        () => {}
      ); 
    }
  }

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
