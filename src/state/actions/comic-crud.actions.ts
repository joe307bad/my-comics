import {Action} from '@ngrx/store'

import {Comic} from '../../models/comic'
import {List} from "immutable";
import {Guid} from "../../utilities/guid";

export const ADD_COMIC = '[Comic] Search';
export const ADD_COMIC_SUCCESS = '[Comic] Search Success';
export const ADD_COMIC_FAILURE = '[Comic] Search Failure';


/* region Comic Search Actions */

export class ComicAddAction implements Action {
  readonly type = ADD_COMIC;

  constructor(public payload: Guid) { }
}

export class ComicAddSuccessAction implements Action {
  readonly type = ADD_COMIC_SUCCESS;

  constructor(public payload: List<Comic>) {
  }
}

export class ComicAddFailureAction implements Action {
  readonly type = ADD_COMIC_FAILURE;

  constructor(public payload: any) {
  }
}

/* endregion Comic Search Actions */

export type Actions
  = ComicAddAction
  | ComicAddSuccessAction
  | ComicAddFailureAction;
