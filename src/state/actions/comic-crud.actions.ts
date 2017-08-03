import {Action} from '@ngrx/store'

import {Comic} from '../../models/comic'
import {List} from "immutable";


/* region Comic Add Actions */

export const ADD_COMIC = '[Comic] Add';
export const ADD_COMIC_SUCCESS = '[Comic] Add Success';
export const ADD_COMIC_FAILURE = '[Comic] Add Failure';

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

/* endregion Comic Add Actions */

/* region Comic Remove Actions */

export const REMOVE_COMIC = '[Comic] Remove';
export const REMOVE_COMIC_SUCCESS = '[Comic] Remove Success';
export const REMOVE_COMIC_FAILURE = '[Comic] Remove Failure';

export class ComicRemoveAction implements Action {
  readonly type = REMOVE_COMIC;

  constructor(public payload: number) { }
}

export class ComicRemoveSuccessAction implements Action {
  readonly type = REMOVE_COMIC_SUCCESS;

  constructor(public payload: number) {
  }
}

export class ComicRemoveFailureAction implements Action {
  readonly type = REMOVE_COMIC_FAILURE;

  constructor(public payload: any) {
  }
}

/* endregion Comic Add Actions */

export type Actions
  = ComicAddAction
  | ComicAddSuccessAction
  | ComicAddFailureAction
  /////
  | ComicRemoveAction
  | ComicRemoveSuccessAction
  | ComicRemoveFailureAction;
