import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-bem-vindo-ao-smart-lab',
  templateUrl: 'bem-vindo-ao-smart-lab.html'
})
export class BemVindoAoSmartLabPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
}
