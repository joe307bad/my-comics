import {TestBed} from '@angular/core/testing';
import {Actions} from '@ngrx/effects';
import {cold, hot, getTestScheduler} from 'jasmine-marbles';
import {empty} from 'rxjs/observable/empty';
import {Observable} from 'rxjs/Observable';
import {
  SEARCH_SCHEDULER, SEARCH_DEBOUNCE, ComicSearchEffects,
} from "./comic-search.effects";
import {ComicService} from "../../services/comic.service";
import {Comic} from "../../models/comic";
import moment = require("moment");
import {ComicSearchAction} from "../actions/comic-search.actions";
import {ComicSearchSuccessAction} from "../actions/comic-search.actions";
import {List} from "immutable";

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe('ComicSearchEffects', () => {
  let effects: ComicSearchEffects;
  let comicService: any;
  let actions$: TestActions;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ComicSearchEffects,
        {
          provide: ComicService,
          useValue: jasmine.createSpyObj('comicService', ['SearchComics']),
        },
        {provide: Actions, useFactory: getActions},
        {provide: SEARCH_SCHEDULER, useFactory: getTestScheduler},
        {provide: SEARCH_DEBOUNCE, useValue: 30},
      ],
    });

    effects = TestBed.get(ComicSearchEffects);
    comicService = TestBed.get(ComicService);
    actions$ = TestBed.get(Actions);
  });

  describe('ComicSearchSuccess', () => {
    it('fetch comics based on query from Comic Vine API, return list of comics', () => {

      let testComic: List<Comic> = List([{
        Id: 1111,
        Number: "111",
        Name: "Comic Name",
        StoreDate: moment("2016-07-07"),
        Image: "image.png"
      }]);

      let action = new ComicSearchAction("the flash");
      const completion = new ComicSearchSuccessAction(testComic);

      const comicVineResult = testComic;

      actions$.stream = hot('-a---', {a: action});
      const response = cold('-a|', {a: comicVineResult});
      const expected = cold('-----b', {b: completion});


      comicService.SearchComics.and.returnValue(response);

      expect(effects.comicSearchEffect).toBeObservable(expected);
    });
  });
});
