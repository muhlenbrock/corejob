import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2';
import { RegistroUsuarioPage } from '../registro-usuario/registro-usuario';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
var SERVER_URL = 'http://api.corejob.cl/';
export var Page1 = (function () {
    function Page1(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
    }
    Page1.prototype.openPage = function () {
        this.navCtrl.push(RegistroUsuarioPage);
    };
    Page1.prototype.doLogin = function () {
        var _this = this;
        var body = 'user[email]=' + this.usuario + '&user[password]=' + this.password;
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new RequestOptions({ headers: headers });
        this.http
            .post(SERVER_URL + 'sesion.json', body, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            _this.navCtrl.push(Page2, { userid: data.user, token: data.token });
        }, function (err) {
            console.log("ERROR!: ", err);
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
    ];
    return Page1;
}());
//# sourceMappingURL=page1.js.map