import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
//import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

const SERVER_URL = 'http://api.corejob.cl/';
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
  rut: string;
  nombre: string;
  email: string;
  password: string;

  constructor(public http: Http) {
    console.log('Hello CorejobServices Provider');
  }

  ionViewDidLoad() {
    console.log('Hello RegistroUsuarioPage Page');
  }

  reg(){
    let headers = new Headers({
			'Content-Type': 'application/x-www-form-urlencoded'
		});
		let options = new RequestOptions({
			headers: headers
		});
		let body = 'user[nombre]=' + this.nombre + '&user[rut]=' + this.rut + '&user[email]=' + this.email + '&user[password]=' + this.password;

		return this.http.post(SERVER_URL + 'registro.json', body, options)
			.toPromise()
			.then(response => {return response.json()}, this.handleError);
  }

  handleError(error) {
		console.log(error);
		return error.json().message || 'Error en el Servidor, intente de nuevo mas tarde';
	}

}
