import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail-page',
  templateUrl: 'detail-page.html'
})
export class DetailPagePage {

  pushMessage: string = "push message will be displayed here";
  titulo: string = "";

  constructor(public navCtrl: NavController, public params: NavParams) {
    if (params.data.message) {
      this.pushMessage = params.data.message;
      this.titulo = params.data.title;
    }
  }
  ionViewDidLoad() {
    console.log('Hello DetailPagePage Page');
  }

}
