import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar, Push, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { RegistroUsuarioPage } from '../pages/registro-usuario/registro-usuario';
import { DetailPagePage } from '../pages/detail-page/detail-page';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public alertCtrl: AlertController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Page One', component: Page1 },
      { title: 'Page Two', component: Page2 },
      { title: 'Registro Usuario', component: RegistroUsuarioPage },
      { title: 'DetailPagePage', component: DetailPagePage}
    ];


    platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          StatusBar.styleDefault();
          Splashscreen.hide();
          let push = Push.init({
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

          push.on('registration', (data) => {
            console.log("device token ->", data.registrationId);
            //TODO - send device token to server
          });
          push.on('notification', (data) => {
            console.log('message', data.message);
            let self = this;
            //if user using app and push notification comes
            if (data.additionalData.foreground) {
              // if application open, show popup
              let confirmAlert = this.alertCtrl.create({
                title: data.title,
                message: data.message,
                buttons: [{
                  text: 'Ignorar',
                  role: 'cancel'
                }, {
                  text: 'Ver',
                  handler: () => {
                    //TODO: Your logic here
                    self.nav.push(DetailPagePage, {message: data.message,title: data.title});
                  }
                }]
              });
              confirmAlert.present();
            } else {
              //if user NOT using app and push notification comes
              //TODO: Your logic on click of push notification directly
              self.nav.push(DetailPagePage, {message: data.message, title: data.title});
              console.log("Push notification clicked");
            }
          });
          push.on('error', (e) => {
            console.log(e.message);
          });
        });




  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
