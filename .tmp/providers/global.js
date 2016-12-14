import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the Global provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export var Global = (function () {
    function Global(http) {
        this.http = http;
        this.userid = 0;
        this.registrationid = 0;
        console.log('Hello Globalvars Provider');
        this.userid = "";
        this.registrationid = "";
    }
    Global.prototype.setUserIdVar = function (value) {
        this.userid = value;
    };
    Global.prototype.getUserIdVar = function () {
        return this.userid;
    };
    Global.prototype.setRegistrationIdVar = function (value) {
        this.registrationid = value;
    };
    Global.prototype.getRegistrationIdVar = function () {
        return this.registrationid;
    };
    Global.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Global.ctorParameters = [
        { type: Http, },
    ];
    return Global;
}());
//# sourceMappingURL=global.js.map