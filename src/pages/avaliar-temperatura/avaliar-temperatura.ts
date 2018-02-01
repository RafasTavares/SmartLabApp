import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BemVindoAoSmartLabPage } from '../bem-vindo-ao-smart-lab/bem-vindo-ao-smart-lab';
import { Http } from '@angular/http';

@Component({
  selector: 'page-avaliar-temperatura',
  templateUrl: 'avaliar-temperatura.html'
})
export class AvaliarTemperaturaPage {

  nota: any = 1;
  http: Http;

  constructor(public navCtrl: NavController) { }
  goToBemVindoAoSmartLab(params) {


    let retorno;
    try {
      this.http.post("localhost:8733/1/vote", this.nota).subscribe(res => retorno = res.json());

      console.log(retorno);
      let status = retorno;
      alert("Avaliação inserida com sucesso!");
    } catch (error) {
    //  console.log(error);
      alert("localhost off - simular inserido com sucesso!");
    }

    if (!params) params = {};
    this.navCtrl.push(BemVindoAoSmartLabPage);
  }

  setBadge(value) {
    this.nota = value.value;
  }
}
