import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BemVindoAoSmartLabPage } from '../bem-vindo-ao-smart-lab/bem-vindo-ao-smart-lab';
import { AvaliarTemperaturaPage } from '../avaliar-temperatura/avaliar-temperatura';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = BemVindoAoSmartLabPage;
  tab2Root: any = AvaliarTemperaturaPage;
  tab3Root: any = LoginPage;
  constructor(public navCtrl: NavController) {
  }
  goToBemVindoAoSmartLab(params){
    if (!params) params = {};
    this.navCtrl.push(BemVindoAoSmartLabPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
}
