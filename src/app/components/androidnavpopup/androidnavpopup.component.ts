import { Component } from '@angular/core';

@Component({
  selector: 'app-androidnavpopup',
  templateUrl: './androidnavpopup.component.html',
  styleUrls: ['./androidnavpopup.component.scss']
})
export class AndroidnavpopupComponent {




  headertitle:any



  men(){
    (<HTMLInputElement>document.getElementById("rowbody")).style.display = "none";
    (<HTMLInputElement>document.getElementById("rowbodynext")).style.display = "block";
    this.headertitle = "Men"
  }

  women(){
    (<HTMLInputElement>document.getElementById("rowbody")).style.display = "none";
    (<HTMLInputElement>document.getElementById("rowbodynext")).style.display = "block";
    this.headertitle = "Women"
  }

  kid(){
    (<HTMLInputElement>document.getElementById("rowbody")).style.display = "none";
    (<HTMLInputElement>document.getElementById("rowbodynext")).style.display = "block";
    this.headertitle = "Kid"
  }

  loginPopup() {
    (<HTMLInputElement>document.getElementById("popupEmail")).classList.toggle("active");
  }

  closePopup() {
    (<HTMLInputElement>document.getElementById("popupEmail")).classList.toggle("active");
  }

  
}
