import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent{
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  localRes;

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }

  password: string = "";
  firstName : string = "";
  lastName: string = "";

  constructor(private httpClient:HttpClient){  }

  onSubmit = function(user) {

    this.httpClient.post(`/login-users`, {email: this.email.value, password: user.password})

    //this.httpClient.get(`/get-users`,{observe: 'response'})

    .subscribe(
      (data) => {

        if(data.length) {
          this.firstName = data[0].first_name;
          this.lastName = data[0].last_name;
          console.log(this.first_name + " " + this.last_name);
        }
        
        /*
        if(data.length) {
          this.firstName = data[0].first_name;
          this.lastName = data[0].last_name;
          console.log(this.first_name + " " + this.last_name);
        }
          console.log(user.password);
          this.firstName = data[0].firstName;
          this.lasttName = data[0].lastName;
          console.log(this.firstName+this.lastName);
        }*/
        //this.firstName = data.body[0].firstName;
        //this.lasttName = data.body[0].lastName;
        //response code
         //console.log(data.status);
      }
    ),

    error => console.log(error);
  }
  
}

