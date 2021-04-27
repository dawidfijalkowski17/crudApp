import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Campaign } from '../../DTO/campaign';

@Injectable({
  providedIn: 'root'
})
export class AddEditService {

  campaignFound!: number;

  campaignForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(6)]],
    keywords: ['', [Validators.required ]],
    bidAmount: ['', [Validators.required]],
    status: [ '' , Validators.required],
    town: ['', Validators.required],
    radius: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  getCampaignData(){
    return this.campaignForm.value
  }

  setCampaignData(data: Campaign){
    this.campaignForm.patchValue(data);
  }

}
