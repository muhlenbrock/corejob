import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Global provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Global {
  userid: any = 0;
  registrationid: any = 0;
  constructor(public http: Http) {
    console.log('Hello Globalvars Provider');
    this.userid = "";
    this.registrationid ="";
  }

  public setUserIdVar(value) {
    this.userid = value;
  }

  public getUserIdVar() {
    return this.userid;
  }

  public setRegistrationIdVar(value) {
    this.registrationid = value;
  }

  public getRegistrationIdVar() {
    return this.registrationid;
  }

}
