import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';
import * as comicCrud from '../actions/comic-crud.actions';
import {ComicService} from "../../services/comic.service";
import {CoreOptions} from "rx-http-request";
import { LoadingController } from 'ionic-angular';

@Injectable()
export class ComicCrudEffects {

  @Effect() comicAddEffect: Observable<Action> = this.actions$.ofType(comicCrud.ADD_COMIC)
    .map(toPayload)
    .map(data => ({type: comicCrud.ADD_COMIC_SUCCESS, payload: data}))
    .catch(error => of({type: comicCrud.ADD_COMIC_FAILURE, payload: error}));

  @Effect() comicRemoveEffect: Observable<Action> = this.actions$.ofType(comicCrud.REMOVE_COMIC)
    .map(toPayload)
    .map(data => ({type: comicCrud.REMOVE_COMIC_SUCCESS, payload: data}))
    .catch(error => of({type: comicCrud.REMOVE_COMIC_FAILURE, payload: error}));

  constructor(private actions$: Actions,
              private comicService: ComicService,
              public loadingCtrl: LoadingController) {
  }
}
