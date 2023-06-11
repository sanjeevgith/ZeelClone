import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchinputComponent } from './components/searchinput/searchinput.component';
import { ProductscategorywiseComponent } from './components/productscategorywise/productscategorywise.component';
import { AndroidnavpopupComponent } from './components/androidnavpopup/androidnavpopup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SearchinputComponent,
    ProductscategorywiseComponent,
    AndroidnavpopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
