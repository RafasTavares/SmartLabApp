import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AvaliarTemperaturaPage } from '../avaliar-temperatura/avaliar-temperatura';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = AvaliarTemperaturaPage;
  constructor(public navCtrl: NavController) {
  }
  
}
