import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';
import * as comic from '../actions/comic-search.actions';
import {ComicService} from "../../services/comic.service";
import {CoreOptions} from "rx-http-request";
import { LoadingController } from 'ionic-angular';

@Injectable()
export class ComicSearchEffects {


  @Effect() comicSearchEffect: Observable<Action> = this.actions$.ofType(comic.SEARCH_COMIC)
    .map(toPayload)
    .switchMap(payload =>
      this.comicService.SearchComics(CoreOptions, payload)
        .map(data => {
          return {type: comic.SEARCH_COMIC_SUCCESS, payload: data};
        })
        .catch(error => of({type: comic.SEARCH_COMIC_FAILURE, payload: error}))
    );

  constructor(private http: Http,
              private actions$: Actions,
              private comicService: ComicService,
              public loadingCtrl: LoadingController) {
  }
}
