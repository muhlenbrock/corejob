import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
var SERVER_URL = 'http://api.corejob.cl/';
export var Page2 = (function () {
    function Page2(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        // If we navigated to this page, we will have an item available as a nav param
        //this.selectedItem = navParams.get('item');
        this.userid = navParams.get('userid');
        this.token = navParams.get('token');
        //alert(this.userid + "   " + this.token);
        console.log("este es el usuario id: " + this.userid);
        var body = this.userid;
        var headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new RequestOptions({ headers: headers });
        console.log(options);
        this.http
            .get(SERVER_URL + 'usuarios/' + this.userid, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            //console.log(data);
            _this.nombre = data.data.attributes.nombre;
            _this.apaterno = data.data.attributes.apaterno;
            _this.amaterno = data.data.attributes.amaterno;
            _this.rut = data.data.attributes.rut;
            _this.email = data.data.attributes.email;
        }, function (err) {
            console.log("ERROR!: ", err);
        });
    }
    Page2.decorators = [
        { type: Component, args: [{
                    selector: 'page-page2',
                    templateUrl: 'page2.html'
                },] },
    ];
    /** @nocollapse */
    Page2.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: Http, },
    ];
    return Page2;
}());
//# sourceMappingURL=page2.js.map