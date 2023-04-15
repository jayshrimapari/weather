import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForcastComponent } from './forcast/forcast.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path:'',redirectTo:'landing',pathMatch:"full"},
  {path:'landing', component:LandingComponent},
  {path:'forcast',component:ForcastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
