import {TestBed} from '@angular/core/testing';
import {Actions} from '@ngrx/effects';
import {cold, hot, getTestScheduler} from 'jasmine-marbles';
import {empty} from 'rxjs/observable/empty';
import {Observable} from 'rxjs/Observable';
import * as comic from '../../state/actions/comic-search.actions';
import {
  SEARCH_SCHEDULER, SEARCH_DEBOUNCE, ComicSearchEffects,
} from "../../state/effects/comic-search.effects";
import {ComicService} from "../../services/comic.service";
import {Comic} from "../../models/comic";
import moment = require("moment");
import {List} from "immutable";
import {ComicSearchAction} from "../../state/actions/comic-search.actions";
import {ComicSearchSuccessAction} from "../../state/actions/comic-search.actions";

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

describe('BookEffects', () => {
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

  describe('search$', () => {
    it('fetch comics based on query from Comic Vine API', () => {

      let testComic: Comic[] = [{
        Id: 1111,
        Number: "111",
        Name: "Comic Name",
        StoreDate: moment("2016-07-07"),
        Image: "image.png"
      }];
      let action = new ComicSearchAction("the flash");
      const completion = new ComicSearchSuccessAction(testComic);

      const comicVineResult = testComic;

      actions$.stream = hot('-a---', {a: action});
      const response = cold('-a|', {a: comicVineResult});
      const expected = cold('-----b', {b: completion});


      comicService.SearchComics.and.returnValue(response);

      expect(effects.comicSearchEffect).toBeObservable(expected);
    });

    // it('should return a new book.SearchCompleteAction, with an empty array, if the books service throws', () => {
    //   const action = new SearchAction('query');
    //   const completion = new SearchCompleteAction([]);
    //   const error = 'Error!';
    //
    //   actions$.stream = hot('-a---', { a: action });
    //   const response = cold('-#|', {}, error);
    //   const expected = cold('-----b', { b: completion });
    //   googleBooksService.searchBooks.and.returnValue(response);
    //
    //   expect(effects.search$).toBeObservable(expected);
    // });
    //
    // it(`should not do anything if the query is an empty string`, () => {
    //   const action = new SearchAction('');
    //
    //   actions$.stream = hot('-a---', { a: action });
    //   const expected = cold('---');
    //
    //   expect(effects.search$).toBeObservable(expected);
    // });
  });
});
