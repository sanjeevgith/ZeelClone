import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{





  constructor(private route:Router){}


  searchrow = false;
  androidnavbar = true

  searchmodel(){
   this.searchrow =true
   this.androidnavbar = false

  }

   openpopupnavbar(){
    this.route.navigate(["/androidnavbar"])

   }

  

  closeSeach(){
    this.searchrow =false
    this.androidnavbar = true

  }





  ngOnInit(): void {
    
  }





}
