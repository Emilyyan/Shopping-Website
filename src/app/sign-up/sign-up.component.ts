import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent{
  constructor(private httpClient:HttpClient){  }

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  //email validation function
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }

  //when click submit, do post
  onSubmit = function(user) {
    console.log(user);
    if (this.email.valid) {
      //hash logic may go here

     this.httpClient.post(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Users`, {email: "testing@gmail.com", first_name: "post", last_name: "hihi", password: "123456"})
      .subscribe(
        res => console.log(res)
      );
      
    }
  }

}