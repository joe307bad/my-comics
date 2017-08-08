;import {NgModule} from '@angular/core';
import {IonicApp} from 'ionic-angular';
import {ComicCrudEffects} from "../state/effects/comic-crud.effects";
import {ComicSearchEffects} from "../state/effects/comic-search.effects";
import {EffectsModule} from "@ngrx/effects";
import {reducers} from "../state/reducers/index";
import {StoreModule} from "@ngrx/store";
import {MyApp} from "./app.component";
import {IonicModule, IonicErrorHandler} from "ionic-angular";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {PipeModule} from "../utilities/pipe.module";
import {HomePage} from "../pages/home/home";
import {ErrorHandler} from "@angular/core";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {ComicService} from "../services/comic.service";

export let appImports = [
  PipeModule,
  HttpModule,
  BrowserModule,
  IonicModule.forRoot(MyApp),
  StoreModule.forRoot(reducers),
  EffectsModule.forRoot([ComicSearchEffects, ComicCrudEffects]),
];

export let appProviders = [
  ComicService,
  StatusBar,
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler}
];

export let appDeclarations = [
  MyApp,
  HomePage
];


@NgModule({
  imports: [
    PipeModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ComicSearchEffects, ComicCrudEffects])
  ],
  declarations: [
    MyApp,
    HomePage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
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
