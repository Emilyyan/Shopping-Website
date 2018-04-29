import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { MatPaginator} from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //user: User;
  user =[];
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private httpClient:HttpClient){  }

  ngOnInit() {
    //id should be replaced by the return value from server side
    this.httpClient.get(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Users?id=1`)
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          console.log(data);
          this.user = data[0];
          
        }
      }, 
      error => console.log("Error", error)
      //() => {this.xxx();}
    );

    //order history should be returned from server side after authentication
    this.httpClient.get(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Orders`)
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          this.dataSource.data = data;
          console.log(this.dataSource.data);
        }
      }, 
      error => console.log("Error", error)
      //() => {this.xxx();}
    )

  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  update = function(user) {
    //below link if only for testing front end logic
    //this.httpClient.post(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Users`, {email: user.email, first_name: user.firstName, last_name: user.lastName})
     this.httpClient.post(`/register-users`, {email: user.email, first_name: user.firstName, last_name: user.lastName})
      .subscribe(
        res => console.log(res)
      );
  } 

}
/*
export class User{
  email: String;
  firstName: String;
  lastName: String;
  address: String;
}*/
/*
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'}
];*/
