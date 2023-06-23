import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductscategorywiseComponent } from './components/productscategorywise/productscategorywise.component';
import { AndroidnavpopupComponent } from './components/androidnavpopup/androidnavpopup.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { SearchinputComponent } from './components/searchinput/searchinput.component';

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
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"cart",
    component:ShoppingcartComponent
  },
  {
    path:"searchinput",
    component:SearchinputComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
