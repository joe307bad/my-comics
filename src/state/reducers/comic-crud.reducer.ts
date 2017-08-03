import * as comicCrud from '../actions/comic-crud.actions'
import {List} from "immutable";
import {Comic} from "../../models/comic";

export interface State {
  selectedComic?: Comic;
  myComics: List<Comic>;
}

const initialState: State = {
  selectedComic: null,
  myComics: List<Comic>()
};

export function reducer(state = initialState, action: comicCrud.Actions): State {
  switch (action.type) {

    /* #region Add Comic  */

    case comicCrud.ADD_COMIC: {
      let selectedComic = action.payload;
      return  Object.assign({}, state, {
        selectedComic: selectedComic
      });
    }

    case comicCrud.ADD_COMIC_SUCCESS: {

      return Object.assign({}, state, {
        myComics: state.myComics.toSet().union(List([action.payload]))
      });
    }

    case comicCrud.ADD_COMIC_FAILURE: {
      return state;
    }

    /* #endregion Add Comic  */

    /* #region Remove  Comic  */

    case comicCrud.REMOVE_COMIC_FAILURE:
    case comicCrud.REMOVE_COMIC: {
      return state;
    }

    case comicCrud.REMOVE_COMIC_SUCCESS: {

      return Object.assign({}, state, {
        myComics: state.myComics.filter(function(item) {
          return item.Id !== action.payload;
        })
      });
    }

    /* #endregion Remove Comic  */

    default: {
      return state;
    }

  }
}

export const getMyComics = (state: State) => state.myComics;
