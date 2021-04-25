import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddEditService } from '../AddEditService/add-edit.service';
import { Campaign } from '../campaign';
import { CampaignService } from '../CampaignService/campaign.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  campaigns: any;
  isEdit = false;
  campaignId!: string;
  selectedCampaign: any;

  campaignForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(6)]],
    keywords: ['', [Validators.required ]],
    bidAmount: ['', [Validators.required]],
    status: ['', Validators.required],
    town: ['', Validators.required],
    radius: ['', Validators.required]
  })

  constructor(private campaignService: CampaignService, private router: Router, private addEditService: AddEditService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAllCampaigns()
  }

  getAllCampaigns(){
    this.campaignService.getAllCmapaign().subscribe(
      (res) =>{
        this.campaigns = res;
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

  setEditContent(){
    this.isEdit = true;
  }

  getCampaignId(id: string){
    this.campaignId = id;
  }

  setCampaignData(id: string){
    
    if(this.campaigns){
      this.selectedCampaign =  this.campaigns.find((x: { _id: string; }) => x._id === id)
      this.campaignId = this.selectedCampaign._id;
    }

    this.addEditService.setCampaignData(this.selectedCampaign)
  }
}
