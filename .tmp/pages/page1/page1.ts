import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2';
import { RegistroUsuarioPage } from '../registro-usuario/registro-usuario';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Global } from '../../providers/global';
import 'rxjs/Rx';

const SERVER_URL = 'http://api.corejob.cl/';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  data:any;
  private mydata: any;

  constructor(public navCtrl: NavController,
              public http: Http,
              public global: Global) {
                this.data = {};
                this.data.usuario = "";
                this.data.password = "";
              }

  openPage(){
    this.navCtrl.push(RegistroUsuarioPage);
  }

  doLogin() {
    let body = 'user[email]=' + this.data.usuario + '&user[password]=' + this.data.password;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });

    this.http
        .post(SERVER_URL + 'sesion.json', body, options)
        .map(res => res.json())
        .subscribe(
            data => {
              console.log(data);
              this.mydata = data;
              //this.global.setRegistrationIdVar(123456);
              //console.log(this.global.getRegistrationIdVar());
              this.data.usuario = "";
              this.data.password = "";
              this.doRegistrationId(data.user);
              this.navCtrl.push(Page2, { userid: data.user, token: data.token});
            },
            err => {
              console.log("ERROR!: fallo el intento de sesión", err);
            }
        );
    }

    doRegistrationId(value) {

      let body = 'user[id]=' + value + '&user[registrationid]=' + this.global.getRegistrationIdVar();
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
      let options = new RequestOptions({ headers: headers });

      this.http
          .patch(SERVER_URL + 'usuarios/' + value, body, options)
          .map(res => res.json())
          .subscribe(
              data => {
                console.log(data);
              },
              err => {
                console.log("ERROR!: error en registro de App." + this.global.getRegistrationIdVar(), err);
              }
          );
      }


}
