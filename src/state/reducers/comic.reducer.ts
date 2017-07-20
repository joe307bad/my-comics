import {Comic} from '../../models/comic'
import * as comic from '../actions/comic.actions'
import {State} from "@ngrx/store";
import {AppState} from "../app-state";

export function reducer(state = initialState, action: comic.Actions): AppState {
  switch (action.type) {
    case comic.ADD_COMIC: {
      return [...state, Object.assign({}, action.payload)];
    }
  }
}
