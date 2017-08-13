import {TestBed, ComponentFixture, async} from '@angular/core/testing';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ComicCrudEffects} from "../state/effects/comic-crud.effects";
import {ComicSearchEffects} from "../state/effects/comic-search.effects";
import {EffectsModule} from "@ngrx/effects";
import {reducers} from "../state/reducers/index";
import {StoreModule} from "@ngrx/store";
import {IonicModule, IonicErrorHandler} from "ionic-angular";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {PipeModule} from "../utilities/pipe.module";
import {ComicService} from "../services/comic.service";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {ErrorHandler} from "@angular/core";

let comp: MyApp;
let fixture: ComponentFixture<MyApp>;

describe('AppRoot', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
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
      providers: [
        ComicService,
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
      ]
    }).compileComponents();

  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    comp = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
    comp = null;
  });

  it('is created', () => {
    expect(fixture).toBeTruthy();
    expect(comp).toBeTruthy();
  });

  it('initialises with a root page of HomePage', () => {
    expect(comp['rootPage']).toBe(HomePage);
  });

  it('can remove a comic from the list', () => {
    comp.RemoveComic(1111);
  });

});

