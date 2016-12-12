import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/*
  Generated class for the DetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var DetailPagePage = (function () {
    function DetailPagePage(navCtrl, params) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.pushMessage = "push message will be displayed here";
        this.titulo = "";
        if (params.data.message) {
            this.pushMessage = params.data.message;
            this.titulo = params.data.title;
        }
    }
    DetailPagePage.prototype.ionViewDidLoad = function () {
        console.log('Hello DetailPagePage Page');
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
    ];
    return DetailPagePage;
}());
//# sourceMappingURL=detail-page.js.map