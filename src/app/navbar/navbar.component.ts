import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  email: string = "sp@gmail.com";
  statusCode: number;
  constructor(private httpClient:HttpClient, public dialog: MatDialog) {}

  ngOnInit() {
    //retrieve status code to decide if the user has logged in
    this.httpClient.get(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Users?email=${this.email}`, {observe: 'response'})
    .subscribe(
      (data) => {
        //console.log(data.status);
        this.statusCode = data.status;
      }
    );
  }

  openSignin() {
    const dialogRef = this.dialog.open(SignInComponent, {
      height: '45%',
      width: '40%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openSignup() {
    const dialogRef = this.dialog.open(SignUpComponent, {
      height: '45%',
      width: '40%'
    });
  }

}
