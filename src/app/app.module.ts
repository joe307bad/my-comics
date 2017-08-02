import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { EffectsModule } from '@ngrx/effects';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StoreModule} from "@ngrx/store";
import {reducers} from "../state/reducers/index";
import {ComicSearchEffects} from "../state/effects/comic-search.effects"
import { HttpModule } from '@angular/http';
import {ComicService} from "../services/comic.service";
import {ComicCrudEffects} from "../state/effects/comic-crud.effects";
import {SearchModule} from "../pages/search/search.module";
import {SearchPage} from "../pages/search/search";
import {PipeModule} from "../utilities/pipe.module";


@NgModule({
  imports: [

    PipeModule,
    SearchModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ComicSearchEffects, ComicCrudEffects]),
  ],
  declarations: [
    MyApp,
    HomePage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage
  ],
  providers: [
    ComicService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
