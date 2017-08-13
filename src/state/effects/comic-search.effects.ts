import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Scheduler } from 'rxjs/Scheduler';
import { async } from 'rxjs/scheduler/async';
import { of } from 'rxjs/observable/of';
import * as comic from '../actions/comic-search.actions'
import {ComicService} from "../../services/comic.service";
import {ComicSearchSuccessAction} from "../actions/comic-search.actions";
import {ComicSearchFailureAction} from "../actions/comic-search.actions";


export const SEARCH_DEBOUNCE = new InjectionToken<number>('Search Debounce');
export const SEARCH_SCHEDULER = new InjectionToken<Scheduler>(
  'Search Scheduler'
);

@Injectable()
export class ComicSearchEffects {
  @Effect()
  comicSearchEffect: Observable<Action> = this.actions$
    .ofType(comic.SEARCH_COMIC)
    .debounceTime(this.debounce, this.scheduler || async)
    .map(toPayload)
    .switchMap(query => {
      const nextSearch$ = this.actions$.ofType(comic.SEARCH_COMIC).skip(1);

      return this.comicService
        .SearchComics(query)
        .takeUntil(nextSearch$)
        .map(data => (new ComicSearchSuccessAction(data)))
        .catch(error => of(new ComicSearchFailureAction(error)));
    });

  constructor(
    private actions$: Actions,
    private comicService: ComicService,

    @Optional()
    @Inject(SEARCH_DEBOUNCE)
    private debounce: number = 300,

    @Optional()
    @Inject(SEARCH_SCHEDULER)
    private scheduler: Scheduler
  ) {}
}
