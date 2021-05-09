import { Component, OnInit } from '@angular/core';
import { AnyNaptrRecord } from 'node:dns';
import { parse } from 'node:path';
import { AuthService } from '../../Services/AuthService/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  logedUser: any;
  sessionTime: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.logedUser = localStorage.getItem('user');
    this.sessionTimer();
  }

  sessionTimer(){
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let lSseconds: any = 0;

    setInterval(()=>{

      var info  = localStorage.getItem('sessionTime');
      var tmp = parseInt(info!)

      lSseconds= tmp += 1;
      
      hours = Math.floor(tmp / 3600)
      minutes  = Math.floor(tmp / 60);
      seconds  = tmp - minutes * 60;

      this.sessionTime = "H: " + hours + " M: " + minutes + " S: " + seconds;
      localStorage.setItem('sessionTime', lSseconds)
      
    },1000)

  }

}
