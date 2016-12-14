import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
var SERVER_URL = 'http://api.corejob.cl/';
/*
  Generated class for the DetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var DetailPagePage = (function () {
    function DetailPagePage(navCtrl, params, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.pushMessage = "push message will be displayed here";
        this.titulo = "";
        this.specialistperfilid = "";
        if (params.data.message) {
            this.pushMessage = params.data.message;
            this.titulo = params.data.title;
            this.specialistperfilid = params.data.specialistperfilid;
        }
    }
    DetailPagePage.prototype.ionViewDidLoad = function () {
        console.log('Hello DetailPagePage Page');
    };
    DetailPagePage.prototype.doConfirm = function () {
        var _this = this;
        var body = 'specialistperfil[id]=' + this.titulo + '&specialistperfil[status]=confirm';
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new RequestOptions({ headers: headers });
        this.http
            .patch(SERVER_URL + 'especialista_perfil_proyecto/' + this.titulo, body, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            _this.showAlertConfirm();
        }, function (err) {
            console.log("ERROR!: error en registro de App.", err);
        });
    };
    DetailPagePage.prototype.doCancel = function () {
        var _this = this;
        var body = 'specialistperfil[id]=' + this.titulo + '&specialistperfil[status]=denied';
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new RequestOptions({ headers: headers });
        this.http
            .patch(SERVER_URL + 'especialista_perfil_proyecto/' + this.titulo, body, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            _this.showAlertDenied();
        }, function (err) {
            console.log("ERROR!: error en registro de App.", err);
        });
    };
    DetailPagePage.prototype.showAlertConfirm = function () {
        var alert = this.alertCtrl.create({
            title: 'Felicitaciones',
            subTitle: '¡Haz aceptado participar en el proyecto!',
            buttons: [{
                    text: 'Aceptar',
                    handler: function () {
                    }
                }]
        });
        alert.present();
    };
    DetailPagePage.prototype.showAlertDenied = function () {
        var alert = this.alertCtrl.create({
            title: 'Atención',
            subTitle: '¡Haz rechazado una oportunidad laboral!',
            buttons: [{
                    text: 'Aceptar',
                    handler: function () {
                    }
                }]
        });
        alert.present();
    };
    DetailPagePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-detail-page',
                    templateUrl: 'detail-page.html'
                },] },
    ];
    /** @nocollapse */
    DetailPagePage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: Http, },
        { type: AlertController, },
    ];
    return DetailPagePage;
}());
//# sourceMappingURL=detail-page.js.map