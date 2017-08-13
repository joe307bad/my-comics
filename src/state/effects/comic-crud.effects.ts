import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {Injectable, Optional, Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';
import * as comicCrud from '../actions/comic-crud.actions';
import {CoreOptions} from "rx-http-request";
import {SEARCH_DEBOUNCE, SEARCH_SCHEDULER} from "./comic-search.effects";
import {Scheduler} from "rxjs/Scheduler";
import {async} from "rxjs/scheduler/async";


@Injectable()
export class ComicCrudEffects {

  @Effect() comicAddEffect: Observable<Action> =
    this.actions$
      .ofType(comicCrud.ADD_COMIC)
      .debounceTime(this.debounce, this.scheduler || async)
      .map(toPayload)
      .switchMap(data => {
        const nextComicAdd = this.actions$.ofType(comicCrud.ADD_COMIC).skip(1);
        return Observable.of(data)
          .takeUntil(nextComicAdd)
          .map(data => new comicCrud.ComicAddSuccessAction(data));
      });

  @Effect() comicRemoveEffect: Observable<Action> =
    this.actions$
      .ofType(comicCrud.REMOVE_COMIC)
      .debounceTime(this.debounce, this.scheduler || async)
      .map(toPayload)
      .switchMap(data => {
        const nextComicAdd = this.actions$.ofType(comicCrud.ADD_COMIC).skip(1);
        return Observable.of(data)
          .takeUntil(nextComicAdd)
          .map(data => new comicCrud.ComicRemoveSuccessAction(data));
      });

  constructor(private actions$: Actions,
              @Optional()
              @Inject(SEARCH_DEBOUNCE)
              private debounce: number = 300,
              @Optional()
              @Inject(SEARCH_SCHEDULER)
              private scheduler: Scheduler) {
  }

}
