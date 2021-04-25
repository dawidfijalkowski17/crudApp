import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ListComponent } from 'src/app/main/Components/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { CampaignService } from 'src/app/main/Services/CampaignService/campaign.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { AddItemComponent } from 'src/app/main/Components/add-item/add-item.component';
import { EditCampaignComponent } from './Components/edit-campaign/edit-campaign.component';
import { AddEditService } from './Services/AddEditService/add-edit.service';


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
