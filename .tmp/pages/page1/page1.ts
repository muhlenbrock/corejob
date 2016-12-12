import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2';
import { RegistroUsuarioPage } from '../registro-usuario/registro-usuario';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

const SERVER_URL = 'http://api.corejob.cl/';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  usuario: string;
  password: string;

  constructor(public navCtrl: NavController, public http: Http) {}

  openPage(){
    this.navCtrl.push(RegistroUsuarioPage);
  }

  doLogin() {

    let body = 'user[email]=' + this.usuario + '&user[password]=' + this.password;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });

    this.http
        .post(SERVER_URL + 'sesion.json', body, options)
        .map(res => res.json())
        .subscribe(
            data => {
              console.log(data);
              this.navCtrl.push(Page2, { userid: data.user, token: data.token});
            },
            err => {
              console.log("ERROR!: ", err);
            }
        );
    }

}
