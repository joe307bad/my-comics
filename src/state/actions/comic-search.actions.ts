import {Action} from '@ngrx/store'

import {Comic} from '../../models/comic'
import {List} from "immutable";

export const SEARCH_COMIC = '[Comic] Search';
export const SEARCH_COMIC_SUCCESS = '[Comic] Search Success';
export const SEARCH_COMIC_FAILURE = '[Comic] Search Failure';
export const SEARCH_CLEAR_RESULTS = '[Comic] Clear Results';


/* region Comic Search Actions */

export class ComicSearchAction implements Action {
  readonly type = SEARCH_COMIC;

  constructor(public payload: string) {
  }
}

export class ComicSearchSuccessAction implements Action {
  readonly type = SEARCH_COMIC_SUCCESS;

  constructor(public payload: List<Comic>) {
  }
}

export class ComicSearchFailureAction implements Action {
  readonly type = SEARCH_COMIC_FAILURE;

  constructor(public payload: any) {
  }
}


export class ComicClearResultsAction implements Action {
  readonly type = SEARCH_CLEAR_RESULTS;
}

/* endregion Comic Search Actions */

export type Actions
  = ComicSearchAction
  | ComicSearchSuccessAction
  | ComicSearchFailureAction
  | ComicClearResultsAction;
