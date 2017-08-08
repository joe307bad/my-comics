import {TestBed, ComponentFixture, async} from '@angular/core/testing';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {appProviders, appImports, appDeclarations} from "./app.config";

let comp: MyApp;
let fixture: ComponentFixture<MyApp>;

describe('AppRoot', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: appDeclarations,
      providers: appProviders,
      imports: appImports,
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

