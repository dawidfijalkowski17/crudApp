import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from 'src/app/main-module/main/Components/add-item/add-item.component';
import { ListComponent } from 'src/app/main-module/main/Components/list/list.component';
import { EditCampaignComponent } from './Components/edit-campaign/edit-campaign.component';
import { UsersComponent } from './Components/users/users.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {path: '', component: MainComponent, children: [ 
    {path: 'list', component: ListComponent },
    {path: 'users', component: UsersComponent }, 
    {path: 'edit-campaign/:idCampaign', component: EditCampaignComponent},
    {path: 'addItem', component: AddItemComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
