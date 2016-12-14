import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar, Push, Splashscreen } from 'ionic-native';
import { Http } from '@angular/http';
import { Global } from '../providers/global';
import 'rxjs/Rx';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { RegistroUsuarioPage } from '../pages/registro-usuario/registro-usuario';
import { DetailPagePage } from '../pages/detail-page/detail-page';
import { IntroPage } from '../pages/intro/intro';
var SERVER_URL = 'http://api.corejob.cl/';
export var MyApp = (function () {
    function MyApp(platform, alertCtrl, http, global) {
        var _this = this;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.global = global;
        this.rootPage = IntroPage;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Page One', component: Page1 },
            { title: 'Page Two', component: Page2 },
            { title: 'Registro Usuario', component: RegistroUsuarioPage },
            { title: 'DetailPagePage', component: DetailPagePage },
            { title: 'IntroPage', component: IntroPage }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
            var push = Push.init({
                android: {
                    senderID: "323182061664"
                },
                ios: {
                    alert: "true",
                    badge: false,
                    sound: "true"
                },
                windows: {}
            });
            push.on('registration', function (data) {
                console.log("device token ->", data.registrationId);
                //TODO - send device token to server
                global.setRegistrationIdVar(data.registrationId);
            });
            push.on('notification', function (data) {
                console.log('message', data.message);
                var self = _this;
                //if user using app and push notification comes
                if (data.additionalData.foreground) {
                    // if application open, show popup
                    var confirmAlert = _this.alertCtrl.create({
                        title: 'Notificación',
                        message: data.message,
                        buttons: [{
                                text: 'Ignorar',
                                role: 'cancel'
                            }, {
                                text: 'Ver',
                                handler: function () {
                                    //TODO: Your logic here
                                    self.nav.push(DetailPagePage, { message: data.message, title: data.title });
                                }
                            }]
                    });
                    confirmAlert.present();
                }
                else {
                    //if user NOT using app and push notification comes
                    //TODO: Your logic on click of push notification directly
                    self.nav.push(DetailPagePage, { message: data.message, title: data.title });
                    console.log("Push notification clicked");
                }
            });
            push.on('error', function (e) {
                console.log(e.message);
            });
        });
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'app.html'
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = [
        { type: Platform, },
        { type: AlertController, },
        { type: Http, },
        { type: Global, },
    ];
    MyApp.propDecorators = {
        'nav': [{ type: ViewChild, args: [Nav,] },],
    };
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map