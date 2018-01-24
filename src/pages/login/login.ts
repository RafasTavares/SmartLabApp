import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BemVindoAoSmartLabPage } from '../bem-vindo-ao-smart-lab/bem-vindo-ao-smart-lab';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToBemVindoAoSmartLab(params){
    if (!params) params = {};
    this.navCtrl.push(BemVindoAoSmartLabPage);
  }
}
