import { Component, OnInit, Inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Order, CartItem , Product} from '../interfaces';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  order: Order;
  products: Product[] = [];
  productArray: CartItem[] = [];
  dataSource = new MatTableDataSource<any>();
  subTotal: number = 0;

  constructor(private httpClient:HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  displayedColumns = ['name', 'quantity', 'price'];

  ngOnInit() {

    this.getOrder(this.data.order_number)
      .then( data => {
        this.order = data[0];
        return this.getProducts();
      })
      .then( _ => {
        for(let p of this.order.products){
          let obj = this.getProductDetail(p.pid);
          let orderitem: CartItem = { pid: p.pid, quantity: p.quantity, name: obj.name, price: obj.price };
          this.productArray.push(orderitem);
          this.subTotal += orderitem.quantity * orderitem.price;
        }
        this.dataSource.data = this.productArray;
      });
  
  }


  /* 
    Make a GET request to retrieve an order from server
    Given the order number, would return a promise.
  */
  private getOrder(orderNumber: number){
    let promise = new Promise((resolve, reject) => {
      let apiURL = `https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Orders?orderNumber=${orderNumber}`;
      this.httpClient.get(apiURL)
        .toPromise()
        .then(
          data => {
            resolve(data);
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
}


