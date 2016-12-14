import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2';
import { RegistroUsuarioPage } from '../registro-usuario/registro-usuario';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Global } from '../../providers/global';
import 'rxjs/Rx';
var SERVER_URL = 'http://api.corejob.cl/';
export var Page1 = (function () {
    function Page1(navCtrl, http, global) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.global = global;
        this.data = {};
        this.data.usuario = "";
        this.data.password = "";
    }
    Page1.prototype.openPage = function () {
        this.navCtrl.push(RegistroUsuarioPage);
    };
    Page1.prototype.doLogin = function () {
        var _this = this;
        var body = 'user[email]=' + this.data.usuario + '&user[password]=' + this.data.password;
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new RequestOptions({ headers: headers });
        this.http
            .post(SERVER_URL + 'sesion.json', body, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            _this.mydata = data;
            //this.global.setRegistrationIdVar(123456);
            //console.log(this.global.getRegistrationIdVar());
            _this.data.usuario = "";
            _this.data.password = "";
            _this.doRegistrationId(data.user);
            _this.navCtrl.push(Page2, { userid: data.user, token: data.token });
        }, function (err) {
            console.log("ERROR!: fallo el intento de sesión", err);
        });
    };
    Page1.prototype.doRegistrationId = function (value) {
        var _this = this;
        var body = 'user[id]=' + value + '&user[registrationid]=' + this.global.getRegistrationIdVar();
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new RequestOptions({ headers: headers });
        this.http
            .patch(SERVER_URL + 'usuarios/' + value, body, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log("ERROR!: error en registro de App." + _this.global.getRegistrationIdVar(), err);
        });
    };
    Page1.decorators = [
        { type: Component, args: [{
                    selector: 'page-page1',
                    templateUrl: 'page1.html'
                },] },
    ];
    /** @nocollapse */
    Page1.ctorParameters = [
        { type: NavController, },
        { type: Http, },
        { type: Global, },
    ];
    return Page1;
}());
//# sourceMappingURL=page1.js.map