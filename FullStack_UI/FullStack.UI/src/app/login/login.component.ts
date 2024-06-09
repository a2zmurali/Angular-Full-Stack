import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { UserCredential } from '../Modles/UserCredential';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private ff : FormBuilder ,private AuthService:AuthService,private route:Router){
    this.loginForm= this.ff.group({
      UserName: [null, [Validators.required, Validators.minLength(4)]],
      Password: [null, [Validators.required, Validators.maxLength(8)]]
    })
    }

  ngOnInit() {
  this.loginForm = new FormGroup({
    UserName: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    Password: new FormControl(null, [Validators.required, Validators.maxLength(8)])
  });
  }
  loginUser() {
    const signInData = new UserCredential(this.loginForm.value.UserName, this.loginForm.value.Password);
  //  console.log(signInData);
   // console.log(this.loginForm.value);
   this.AuthService.authenticate(this.loginForm.value).subscribe(
    {
      next:(response)=>{
        console.log(response);
        const token = response;

        sessionStorage.setItem("token",token);
        this.AuthService.LoggedIn(true);
        this.route.navigate(['/employees']);

      },
      error:(err)=>console.log(err),
      complete:()=>console.log("login processed")
    }
   )

  }
 }
