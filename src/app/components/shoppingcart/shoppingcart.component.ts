import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {



  ngOnInit(): void {
    (<HTMLInputElement>document.getElementById("popupEmail")).style.display = "none";
  }




  loginPopup() {
    (<HTMLInputElement>document.getElementById("popupEmail")).classList.toggle("active");
    (<HTMLInputElement>document.getElementById("popupEmail")).style.display = "block";
    }

  closePopup() {
    
    (<HTMLInputElement>document.getElementById("popupEmail")).classList.toggle("active");
    (<HTMLInputElement>document.getElementById("popupEmail")).classList.toggle("hidden");
    (<HTMLInputElement>document.getElementById("popupEmail")).style.display = "none";


  }

}
