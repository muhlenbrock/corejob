import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
var SERVER_URL = 'http://api.corejob.cl/';
/*
  Generated class for the RegistroUsuario page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var RegistroUsuarioPage = (function () {
    function RegistroUsuarioPage(http) {
        this.http = http;
        console.log('Hello CorejobServices Provider');
    }
    RegistroUsuarioPage.prototype.ionViewDidLoad = function () {
        console.log('Hello RegistroUsuarioPage Page');
    };
    RegistroUsuarioPage.prototype.reg = function () {
        var headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new RequestOptions({
            headers: headers
        });
        var body = 'user[nombre]=' + this.nombre + '&user[rut]=' + this.rut + '&user[email]=' + this.email + '&user[password]=' + this.password;
        return this.http.post(SERVER_URL + 'registro.json', body, options)
            .toPromise()
            .then(function (response) { return response.json(); }, this.handleError);
    };
    RegistroUsuarioPage.prototype.handleError = function (error) {
        console.log(error);
        return error.json().message || 'Error en el Servidor, intente de nuevo mas tarde';
    };
    RegistroUsuarioPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-registro-usuario',
                    templateUrl: 'registro-usuario.html'
                },] },
    ];
    /** @nocollapse */
    RegistroUsuarioPage.ctorParameters = [
        { type: Http, },
    ];
    return RegistroUsuarioPage;
}());
//# sourceMappingURL=registro-usuario.js.map