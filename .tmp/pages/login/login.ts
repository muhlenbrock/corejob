import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroUsuarioPage } from '../registro-usuario/registro-usuario'
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {}
  openPageRegistro(){
    this.navCtrl.push(RegistroUsuarioPage);
  }
  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

}
