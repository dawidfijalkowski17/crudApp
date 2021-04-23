import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from 'src/app/add-item/add-item.component';
import { ListComponent } from 'src/app/list/list.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {path: '', component: MainComponent, children: [ 
    {path: 'list', component: ListComponent},
    {path: 'addItem', component: AddItemComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
