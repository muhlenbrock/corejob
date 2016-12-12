import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroUsuarioPage } from '../registro-usuario/registro-usuario';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {}

  openPage(){
    this.navCtrl.push(RegistroUsuarioPage);
  }

}
