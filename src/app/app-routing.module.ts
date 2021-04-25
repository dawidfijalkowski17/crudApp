import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/Components/home/home.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'mainPage', loadChildren: () => 
  import('../app/main/main.module').then((m)=> m.MainModule)},
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
