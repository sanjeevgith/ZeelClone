import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchinput',
  templateUrl: './searchinput.component.html',
  styleUrls: ['./searchinput.component.scss']
})
export class SearchinputComponent implements OnInit{



  constructor(private router:Router){}

  ngOnInit(): void {
    
  }




  searchproduct(){
    this.router.navigate(['/products']);  
  }

}
