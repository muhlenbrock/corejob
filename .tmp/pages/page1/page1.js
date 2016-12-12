import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroUsuarioPage } from '../registro-usuario/registro-usuario';
export var Page1 = (function () {
    function Page1(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Page1.prototype.openPage = function () {
        this.navCtrl.push(RegistroUsuarioPage);
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
    ];
    return Page1;
}());
//# sourceMappingURL=page1.js.map