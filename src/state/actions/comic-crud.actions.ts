import {Action} from '@ngrx/store'

import {Comic} from '../../models/comic'
import {List} from "immutable";

export const ADD_COMIC = '[Comic] Add';
export const ADD_COMIC_SUCCESS = '[Comic] Add Success';
export const ADD_COMIC_FAILURE = '[Comic] Add Failure';


/* region Comic CRUD Actions */

export class ComicAddAction implements Action {
  readonly type = ADD_COMIC;

  constructor(public payload: Comic) { }
}

export class ComicAddSuccessAction implements Action {
  readonly type = ADD_COMIC_SUCCESS;

  constructor(public payload: Comic) {
  }
}

export class ComicAddFailureAction implements Action {
  readonly type = ADD_COMIC_FAILURE;

  constructor(public payload: any) {
  }
}

/* endregion Comic CRUD Actions */

export type Actions
  = ComicAddAction
  | ComicAddSuccessAction
  | ComicAddFailureAction;
