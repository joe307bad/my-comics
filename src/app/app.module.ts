;import { NgModule} from '@angular/core';
import {IonicApp} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {appImports, appDeclarations, appProviders} from "./app.config";

@NgModule({
  imports: appImports,
  declarations: appDeclarations,
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: appProviders
})
export class AppModule {
}
