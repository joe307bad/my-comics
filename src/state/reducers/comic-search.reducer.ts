import * as comic from '../actions/comic-search.actions'
import {List} from "immutable";
import {Comic} from "../../models/comic";

export interface State {
  loaded: boolean,
  loading: boolean;
  query: string;
  searchResults: List<Comic>;
}

const initialState: State = {
  loaded: false,
  loading: false,
  query: '',
  searchResults: List([]),
};

export function reducer(state = initialState, action: comic.Actions): State {
  switch (action.type) {
    case comic.SEARCH_COMIC: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case comic.SEARCH_COMIC_SUCCESS: {
      const comics = action.payload;

      return Object.assign({}, state, {
        loading: false,
        loaded:  true,
        searchResults: List(comics)
      });
    }

    case comic.SEARCH_COMIC_FAILURE: {

      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        searchResults: List([])
      });

    }

  }
}

export const getSearchResults = (state: State) => {
  return state.searchResults
};
