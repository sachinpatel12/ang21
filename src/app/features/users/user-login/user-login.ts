import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule,  ReactiveFormsModule,  Validators } from '@angular/forms';
import {UserApi } from '../../../core/services/user-api';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { validate } from '@angular/forms/signals';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-login',
  imports: [FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './user-login.html',
  styleUrl: './user-login.css',
})
export class UserLogin {
  loginForm! : FormGroup;
  
  danger : string = 'red';
  Router: any;
  constructor(private userService : UserApi, private router : Router){}

  ngOnInit(){
   
    this.loginForm = new FormGroup ({
      email : new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl( '', [Validators.required, Validators.minLength(4)])
  })
      
    
  }
  submitLogin(){
    console.log(this.loginForm.get('email')?.value);
    console.log(this.loginForm.get('password')?.value);
    if(this.loginForm.invalid){
      this.loginForm.markAsTouched();
    }else{
      this.router.navigateByUrl('/user')
    }

  }
}
