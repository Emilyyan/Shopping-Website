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

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }

  password: string = "";
  firstName : string = "";
  lastName: string = "";

  constructor(private httpClient:HttpClient){  }
  onSubmit = function(user) {
    this.httpClient.get(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Users/?email=${this.email.value}`)
    .subscribe(
      (data:any[]) => {
        if(data.length) {
          this.firstName = data[0].firstName;
          this.lasttName = data[0].lastName;
          console.log(this.firstName+this.lastName);
        }
      }
    )

  }
}

