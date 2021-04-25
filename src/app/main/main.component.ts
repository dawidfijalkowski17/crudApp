import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddEditService } from '../AddEditService/add-edit.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  amount!: number

  constructor(private router: Router, private addEditService: AddEditService) { }

  ngOnInit(): void {
    this.addEditService.setCampaignFound(this.amount).subscribe((res) =>{
      this.amount = res;
      console.log(this.amount)
    })
  }

  backToLastPage(){
    this.router.navigate(['mainPage'])
  }
}
