import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as fromRoot from '../state/reducers';
import { HomePage } from '../pages/home/home';
import {Comic} from "../models/comic";
import {List} from "immutable";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {DefaultDatePipe} from "../utilities/pipes";
import * as comicCrud from '../state/actions/comic-crud.actions';

@Component({
  templateUrl: 'app.html',
  providers: [Store, DefaultDatePipe]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  myComics: Observable<List<Comic>>;

  constructor(private store: Store<fromRoot.State>, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage }
    ];

    this.myComics = store.select(fromRoot.getMyComics);

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  RemoveComic(comicId: number): void{
    this.store.dispatch(new comicCrud.ComicRemoveAction(comicId));
  }
}

