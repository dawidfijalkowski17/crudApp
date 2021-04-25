import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AddEditService } from '../AddEditService/add-edit.service';
import { Campaign } from '../campaign';
import { CampaignService } from '../CampaignService/campaign.service';

@Component({
  selector: 'app-edit-campaign',
  templateUrl: './edit-campaign.component.html',
  styleUrls: ['./edit-campaign.component.css']
})
export class EditCampaignComponent implements OnInit {

  @Input()
  campaignId!: string;

  campaign!: Campaign;
  id!: string;

  campaignForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(6)]],
    keywords: ['', [Validators.required ]],
    bidAmount: ['', [Validators.required]],
    status: ['', Validators.required],
    town: ['', Validators.required],
    radius: ['', Validators.required]
  })

  constructor(private router: Router, private campaignService: CampaignService, private addEditService: AddEditService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    this.getCampaignData()
  }

  updateCampaign(){
     this.campaignService.editCampaign(this.campaign, this.campaignId).subscribe(()=>{
      this.router.navigate(['/list', this.id])
    })
  }

  numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  getCampaignData(){
    this.campaignForm.setValue(this.addEditService.getCampaignData())
  }

  
}
