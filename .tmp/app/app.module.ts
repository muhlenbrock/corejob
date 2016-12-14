import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { RegistroUsuarioPage } from '../pages/registro-usuario/registro-usuario';
import { DetailPagePage } from '../pages/detail-page/detail-page';
import { Global } from '../providers/global';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    RegistroUsuarioPage,
    DetailPagePage
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
    DetailPagePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Global]
})
export class AppModule {}
