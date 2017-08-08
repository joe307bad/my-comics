import {TestBed, ComponentFixture, async} from '@angular/core/testing';
import {searchImports, searchProviders, searchDeclarations} from "./search.config";
import {SearchPage} from "./search";
import {StoreModule} from "@ngrx/store";
import {reducers} from "../../state/reducers/index";
import {BrowserModule} from "@angular/platform-browser";
import {IonicModule} from "ionic-angular";
import {MyApp} from "../../app/app.component";

let comp: SearchPage;
let fixture: ComponentFixture<SearchPage>;

describe('Component: Search Component', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        ...searchDeclarations,
        MyApp
      ],
      providers: searchProviders,
      imports: [
        ...searchImports,
        IonicModule.forRoot(MyApp),
        BrowserModule,
        StoreModule.forRoot(reducers)
      ],
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPage);
    comp = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
    comp = null;
  });

  it('SearchPage is created', () => {
    expect(fixture).toBeTruthy();
    expect(comp).toBeTruthy();
  });
});
