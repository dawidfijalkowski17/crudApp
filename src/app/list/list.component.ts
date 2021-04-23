import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Campaign } from '../campaign';
import { CampaignService } from '../CampaignService/campaign.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  campaigns: any;
  idCampaign: any;
  constructor(private campaignService: CampaignService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCampaigns()
  }

  getAllCampaigns(){
    this.campaignService.getAllCmapaign().subscribe(
      (res) =>{
        this.campaigns = res;
        this.idCampaign = this.campaigns._id;
      }, (err) =>{
        console.log(err)
      }
    )
  }

  deleteCampaign(id: string){
    this.campaignService.delteCampaign(id).subscribe((data)=>{
      window.location.reload()
    }, (err)=>{
      console.log(err)
    })
  }

  updateCampaign(id: string, cmp: Campaign){
    this.campaignService.editCampaign(cmp, id).subscribe((res)=>{
      this.router.navigate(['mainPage/addItem', id])
    })
  }
}
