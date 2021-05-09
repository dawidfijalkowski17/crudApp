import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/main-module/main/Services/AuthService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginTimeWaiting: boolean = false;

  loginForm = this.formBuilder.group( {
    login: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    localStorage.removeItem('user')
    localStorage.removeItem('sessionTime')
  }

  signIn(){
    this.loginTimeWaiting = true;
    localStorage.setItem('user', this.loginForm.controls['login'].value)
    localStorage.setItem('sessionTime', '0')
    setTimeout(() =>{
      
      this.router.navigateByUrl('mainPage')
    }, 3000)  
  }


}
