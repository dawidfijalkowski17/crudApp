import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampaignService } from 'src/app/CampaignService/campaign.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private campaignService: CampaignService) { }

  ngOnInit(): void {
  }

  backToLastPage(){
    this.router.navigate(['mainPage'])
  }
}
