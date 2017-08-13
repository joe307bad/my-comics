import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Scheduler } from 'rxjs/Scheduler';
import { async } from 'rxjs/scheduler/async';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import * as comic from '../actions/comic-search.actions'
import {ComicService} from "../../services/comic.service";
import {ComicSearchSuccessAction} from "../actions/comic-search.actions";
import {ComicSearchFailureAction} from "../actions/comic-search.actions";


export const SEARCH_DEBOUNCE = new InjectionToken<number>('Search Debounce');
export const SEARCH_SCHEDULER = new InjectionToken<Scheduler>(
  'Search Scheduler'
);

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 * The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * Documentation on `toPayload` can be found here:
 * https://github.com/ngrx/platform/blob/master/docs/effects/api.md#topayload
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class ComicSearchEffects {
  @Effect()
  comicSearchEffect: Observable<Action> = this.actions$
    .ofType(comic.SEARCH_COMIC)
    .debounceTime(this.debounce, this.scheduler || async)
    .map(toPayload)
    .switchMap(query => {
      if (query === '') {
        return empty();
      }

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
    /**
     * You inject an optional Scheduler that will be undefined
     * in normal application usage, but its injected here so that you can mock out
     * during testing using the RxJS TestScheduler for simulating passages of time.
     */
    @Optional()
    @Inject(SEARCH_SCHEDULER)
    private scheduler: Scheduler
  ) {}
}
