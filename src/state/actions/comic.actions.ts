import {Injectable} from '@angular/core'
import {Action} from '@ngrx/store'

import {Comic} from '../../models/comic'

export const ADD_COMIC = '[Comic] Add';

@Injectable()
export class ComicAddAction implements Action {
  readonly type = ADD_COMIC;

  constructor(public payload: string) { }
}

export type Actions
  = ComicAddAction;
