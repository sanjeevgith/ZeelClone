import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductscategorywiseComponent } from './components/productscategorywise/productscategorywise.component';
import { AndroidnavpopupComponent } from './components/androidnavpopup/androidnavpopup.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"dashboard",
    pathMatch:"full"
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"products",
    component:ProductscategorywiseComponent
  },
  {
    path:"androidnavbar",
    component:AndroidnavpopupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
