import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AddEditService } from './Services/AddEditService/add-edit.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {



  constructor(private router: Router, private addEditService: AddEditService) { }

  ngOnInit(): void {
      
    }


  backToLastPage(){
    this.router.navigate(['mainPage'])
  }


}
