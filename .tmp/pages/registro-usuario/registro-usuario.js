import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
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
    RegistroUsuarioPage.prototype.regUser = function () {
        var body = 'user[nombre]=' + this.nombre + '&user[rut]=' + this.rut + '&user[email]=' + this.email + '&user[password]=' + this.password;
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new RequestOptions({ headers: headers });
        this.http
            .post(SERVER_URL + 'registro.json', body, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log("ERROR!: ", err);
        });
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