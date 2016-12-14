import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Global } from '../../providers/global';
import { Page2 } from '../page2/page2';
import 'rxjs/Rx';

const SERVER_URL = 'http://api.corejob.cl/';
/*
  Generated class for the DetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail-page',
  templateUrl: 'detail-page.html'
})
export class DetailPagePage {

  pushMessage: string = "push message will be displayed here";
  titulo: string = "";
  specialistperfilid: string = "";

  constructor(public navCtrl: NavController,
              public params: NavParams,
              public http: Http,
              public alertCtrl: AlertController) {
    if (params.data.message) {
      this.pushMessage = params.data.message;
      this.titulo = params.data.title;
      this.specialistperfilid = params.data.specialistperfilid;
    }
  }
  ionViewDidLoad() {
    console.log('Hello DetailPagePage Page');
  }

  doConfirm(){

    let body = 'specialistperfil[id]=' + this.titulo + '&specialistperfil[status]=confirm';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });

    this.http
        .patch(SERVER_URL + 'especialista_perfil_proyecto/' + this.titulo, body, options)
        .map(res => res.json())
        .subscribe(
            data => {
              console.log(data);
              this.showAlertConfirm();
            },
            err => {
              console.log("ERROR!: error en registro de App.", err);
            }
        );

  }

  doCancel(){
    let body = 'specialistperfil[id]=' + this.titulo + '&specialistperfil[status]=denied';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });

    this.http
        .patch(SERVER_URL + 'especialista_perfil_proyecto/' + this.titulo, body, options)
        .map(res => res.json())
        .subscribe(
            data => {
              console.log(data);
              this.showAlertDenied();
            },
            err => {
              console.log("ERROR!: error en registro de App.", err);
            }
        );
  }

  showAlertConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Felicitaciones',
      subTitle: '¡Haz aceptado participar en el proyecto!',
      buttons: [{
                  text: 'Aceptar',
                  handler: () => {
  
                  }
                }]
    });
    alert.present();
  }

  showAlertDenied() {
    let alert = this.alertCtrl.create({
      title: 'Atención',
      subTitle: '¡Haz rechazado una oportunidad laboral!',
      buttons: [{
                  text: 'Aceptar',
                  handler: () => {

                  }
                }]
    });
    alert.present();
  }
}
