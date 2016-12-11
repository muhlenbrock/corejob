import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the RegistroUsuario page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-registro-usuario',
  templateUrl: 'registro-usuario.html'
})
export class RegistroUsuarioPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RegistroUsuarioPage Page');
  }
}
