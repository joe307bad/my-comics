import * as comic from '../actions/comic-search.actions'
import {List} from "immutable";
import {Comic} from "../../models/comic";

export interface State {
  loaded: boolean,
  loading: boolean;
  query: string;
  searchResults: Array<Comic>;
}

const initialState: State = {
  loaded: false,
  loading: false,
  query: '',
  searchResults: []
};

export function reducer(state = initialState, action: comic.Actions): State {
  switch (action.type) {

    case comic.SEARCH_COMIC: {
      let query = action.payload;
      return Object.assign({}, state, {
        loading: true,
        query:  query
      });
    }

    case comic.SEARCH_COMIC_SUCCESS: {
      let comics = action.payload;


      return {
        query: "",
        loading: false,
        loaded:  true,
        searchResults: comics
      };
    }

    case comic.SEARCH_COMIC_FAILURE: {

      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        searchResults: []
      });

    }

    case comic.SEARCH_CLEAR_RESULTS: {

      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        searchResults: []
      });

    }

    default: {
      return state;
    }


  }
}

export const getSearchResults = (state: State) => {
  return state.searchResults
};
