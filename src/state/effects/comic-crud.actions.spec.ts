import {TestBed} from '@angular/core/testing';
import {Actions} from '@ngrx/effects';
import {cold, hot, getTestScheduler} from 'jasmine-marbles';
import {empty} from 'rxjs/observable/empty';
import {Observable} from 'rxjs/Observable';
import {
  SEARCH_SCHEDULER, SEARCH_DEBOUNCE,
} from "./comic-search.effects";
import {Comic} from "../../models/comic";
import moment = require("moment");
import {ComicCrudEffects} from "./comic-crud.effects";
import * as comicCrud from "../actions/comic-crud.actions";

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

describe('ComicCrudEffects', () => {
  let effects: ComicCrudEffects;
  let actions$: TestActions;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ComicCrudEffects,
        {provide: Actions, useFactory: getActions},
        {provide: SEARCH_SCHEDULER, useFactory: getTestScheduler},
        {provide: SEARCH_DEBOUNCE, useValue: 30},
      ],
    });

    effects = TestBed.get(ComicCrudEffects);
    actions$ = TestBed.get(Actions);
  });

  describe('ComicAddSuccess', () => {
    it('should add comic to list of read', () => {

      let newComic: Comic = {
        Id: 1111,
        Number: "111",
        Name: "Comic Name",
        StoreDate: moment("2016-07-07"),
        Image: "image.png"
      };

      const action = new comicCrud.ComicAddAction(newComic);
      const completion = new comicCrud.ComicAddSuccessAction(newComic);

      actions$.stream = hot('-a', { a: action });
      const response = cold('-b', { b: newComic });
      const expected = cold('----c', { c: completion });
      //db.insert.and.returnValue(response);


      expect(effects.comicAddEffect).toBeObservable(expected);
      //expect(db.insert).toHaveBeenCalledWith('books', [newComic]);
    });
  });


  describe('ComicRemoveSuccess', () => {
    it('should remove a comic to list of read comics', () => {

      let removeComicId: number = 1111;

      const action = new comicCrud.ComicRemoveAction(removeComicId);
      const completion = new comicCrud.ComicRemoveSuccessAction(removeComicId);

      actions$.stream = hot('-a', { a: action });
      const response = cold('-b', { b: removeComicId });
      const expected = cold('----c', { c: completion });
      //db.insert.and.returnValue(response);


      expect(effects.comicRemoveEffect).toBeObservable(expected);
      //expect(db.insert).toHaveBeenCalledWith('books', [newComic]);
    });
  });
});
