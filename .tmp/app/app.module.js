import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { RegistroUsuarioPage } from '../pages/registro-usuario/registro-usuario';
import { DetailPagePage } from '../pages/detail-page/detail-page';
import { Global } from '../providers/global';
import { IntroPage } from '../pages/intro/intro';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MyApp,
                        Page1,
                        Page2,
                        RegistroUsuarioPage,
                        DetailPagePage,
                        IntroPage
                    ],
                    imports: [
                        IonicModule.forRoot(MyApp)
                    ],
                    bootstrap: [IonicApp],
                    entryComponents: [
                        MyApp,
                        Page1,
                        Page2,
                        RegistroUsuarioPage,
                        DetailPagePage,
                        IntroPage
                    ],
                    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, Global]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map