import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ListComponent } from 'src/app/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { CampaignService } from 'src/app/CampaignService/campaign.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { AddItemComponent } from 'src/app/add-item/add-item.component';
import { EditCampaignComponent } from '../edit-campaign/edit-campaign.component';
import { AddEditService } from '../AddEditService/add-edit.service';


@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    AddItemComponent,
    EditCampaignComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CampaignService,
    AddEditService
  ]
})
export class MainModule { }
