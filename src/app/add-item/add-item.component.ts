import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Campaign } from '../campaign';
import { CampaignService } from '../CampaignService/campaign.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  
  campaign: any;

  campaignForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(6)]],
    keywords: ['', [Validators.required ]],
    bidAmount: ['', [Validators.required]],
    status: ['', Validators.required],
    town: ['', Validators.required],
    radius: ['', Validators.required]
  })


  constructor(private formBuilder: FormBuilder, private campaignService: CampaignService, private router: Router) { }

  ngOnInit(): void {
  }

  numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  createNewCampaign(){
    this.campaign = this.campaignForm.value
    this.campaignService.addCampaign(this.campaign).subscribe((res)=>{
      this.router.navigate(['mainPage/list'])
    }, (err)=>{
      console.log(err)
    })
  }

}
