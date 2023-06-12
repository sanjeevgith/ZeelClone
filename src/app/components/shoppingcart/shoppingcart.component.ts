import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent {




  loginPopup() {
    (<HTMLInputElement>document.getElementById("popupEmail")).classList.toggle("active");

    }

  closePopup() {
    (<HTMLInputElement>document.getElementById("popupEmail")).classList.toggle("active");

  }

}
