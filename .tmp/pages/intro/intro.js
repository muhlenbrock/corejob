import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page1 } from '../page1/page1';
/*
  Generated class for the Intro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var IntroPage = (function () {
    function IntroPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
            {
                title: "Bienvenidos",
                description: "<b>CoreJob</b> , se parte de nuestro núcleo de trabajo.",
                image: "assets/img/intro1.png",
            },
            {
                title: "¿Como funciona?",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "assets/img/intro2.png",
            },
            {
                title: "Beneficios",
                description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "assets/img/intro3.png",
            }
        ];
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('Hello IntroPage Page');
    };
    IntroPage.prototype.openPage = function () {
        this.navCtrl.push(Page1);
    };
    IntroPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-intro',
                    templateUrl: 'intro.html'
                },] },
    ];
    /** @nocollapse */
    IntroPage.ctorParameters = [
        { type: NavController, },
    ];
    return IntroPage;
}());
//# sourceMappingURL=intro.js.map