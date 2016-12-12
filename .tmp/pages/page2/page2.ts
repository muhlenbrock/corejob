import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

const SERVER_URL = 'http://api.corejob.cl/';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  //selectedItem: any;
  //icons: string[];
  //items: Array<{title: string, note: string, icon: string}>;
userid: string;
token: string;
nombre: string;
apaterno: string;
amaterno: string;
rut:string;
email: string;
posts: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');
    this.userid = navParams.get('userid');
    this.token = navParams.get('token');
    //alert(this.userid + "   " + this.token);

    let body = this.userid;
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
      //'Authorization': this.token
     });
    let options = new RequestOptions({ headers: headers });
    console.log(options);

    this.http
        .get(SERVER_URL + 'usuarios/'+this.userid, options)
        .map(res => res.json())
        .subscribe(
            data => {
              //console.log(data);
              this.nombre = data.data.attributes.nombre;
              this.apaterno = data.data.attributes.apaterno;
              this.amaterno = data.data.attributes.amaterno;
              this.rut = data.data.attributes.rut;
              this.email = data.data.attributes.email;
            },
            err => {
              console.log("ERROR!: ", err);
            }
        );
  }
}
