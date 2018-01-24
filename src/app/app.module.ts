import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BemVindoAoSmartLabPage } from '../pages/bem-vindo-ao-smart-lab/bem-vindo-ao-smart-lab';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { AvaliarTemperaturaPage } from '../pages/avaliar-temperatura/avaliar-temperatura';
import { LoginPage } from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    BemVindoAoSmartLabPage,
    TabsControllerPage,
    AvaliarTemperaturaPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BemVindoAoSmartLabPage,
    TabsControllerPage,
    AvaliarTemperaturaPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}