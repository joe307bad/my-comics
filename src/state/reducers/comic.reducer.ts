import * as comic from '../actions/comic.actions'
import {AppState} from "../app-state";
import {InitialAppState} from "../app-state"

export function reducer(state = InitialAppState, action: comic.Actions): AppState {
  switch (action.type) {
    case comic.ADD_COMIC: {
      return Object.assign({}, state, {
        myComics: [...state.myComics, action.payload]
      });
    }
  }
}
