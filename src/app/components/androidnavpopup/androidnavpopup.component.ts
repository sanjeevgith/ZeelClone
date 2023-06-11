import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-androidnavpopup',
  templateUrl: './androidnavpopup.component.html',
  styleUrls: ['./androidnavpopup.component.scss']
})
export class AndroidnavpopupComponent implements OnInit{




  constructor(){}


  ngOnInit(): void {
    (<HTMLInputElement>document.getElementById("rowbody")).style.display = "block";
    (<HTMLInputElement>document.getElementById("rowbodynext")).style.display = "none";
  }





  headertitle:any

  
  backbtn(){
    (<HTMLInputElement>document.getElementById("rowbody")).style.display = "block";
    (<HTMLInputElement>document.getElementById("rowbodynext")).style.display = "none";
    (<HTMLInputElement>document.getElementById("backarrow")).style.display = "none";
  }

  men(){
    (<HTMLInputElement>document.getElementById("rowbody")).style.display = "none";
    (<HTMLInputElement>document.getElementById("rowbodynext")).style.display = "block";
    (<HTMLInputElement>document.getElementById("backarrow")).style.display = "block";
    this.headertitle = "Men"
  }

  women(){
    (<HTMLInputElement>document.getElementById("rowbody")).style.display = "none";
    (<HTMLInputElement>document.getElementById("rowbodynext")).style.display = "block";
    (<HTMLInputElement>document.getElementById("backarrow")).style.display = "block";
    this.headertitle = "Women"
  }

  kid(){
    (<HTMLInputElement>document.getElementById("rowbody")).style.display = "none";
    (<HTMLInputElement>document.getElementById("rowbodynext")).style.display = "block";
    (<HTMLInputElement>document.getElementById("backarrow")).style.display = "block";
    this.headertitle = "Kid"
  }

  loginPopup() {
    (<HTMLInputElement>document.getElementById("popupEmail")).classList.toggle("active");
    (<HTMLInputElement>document.getElementById("backarrow")).style.display = "none";

    
  }

  closePopup() {
    (<HTMLInputElement>document.getElementById("popupEmail")).classList.toggle("active");
    (<HTMLInputElement>document.getElementById("backarrow")).style.display = "none";
    (<HTMLInputElement>document.getElementById("rowbodynext")).style.display = "none";
    (<HTMLInputElement>document.getElementById("rowbody")).style.display = "block";




  }

  
}
