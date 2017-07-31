// ./effects/auth.ts
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import * as comic from '../actions/comic-search.actions';

@Injectable()
export class AuthEffects {
  // Listen for the 'LOGIN' action
  @Effect() login$: Observable<Action> = this.actions$.ofType(comic.SEARCH_COMIC)
  // Map the payload into JSON to use as the request body
    .map(toPayload)
    .mergeMap(payload =>
      this.http.post('/auth', payload)
      // If successful, dispatch success action with result
        .map(data => ({ type: 'LOGIN_SUCCESS', payload: data }))
        // If request fails, dispatch failed action
        .catch(() => of({ type: 'LOGIN_FAILED' }))
    );

  constructor(
    private http: Http,
    private actions$: Actions
  ) {}
}
