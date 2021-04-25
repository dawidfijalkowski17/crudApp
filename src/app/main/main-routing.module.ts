import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from 'src/app/add-item/add-item.component';
import { ListComponent } from 'src/app/list/list.component';
import { EditCampaignComponent } from '../edit-campaign/edit-campaign.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {path: '', component: MainComponent, children: [ 
    {path: 'list', component: ListComponent, children: [
        {path: 'edit-campaign/:idCampaign', component: EditCampaignComponent}
    ]},
    {path: 'addItem', component: AddItemComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
