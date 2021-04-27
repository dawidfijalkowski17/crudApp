import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  signIn(){
    this.loginTimeWaiting = true;
    setTimeout(() =>{
      this.router.navigateByUrl('mainPage')
    }, 3000)  
  }
}
