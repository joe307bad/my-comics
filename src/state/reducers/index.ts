import {createSelector} from 'reselect';
import {ActionReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {compose} from '@ngrx/core/compose';
import {storeFreeze} from 'ngrx-store-freeze';
import {combineReducers} from '@ngrx/store';

import * as fromComicSearchReducer from './comic-search.reducer';
import * as fromComicCrudReducer from './comic-crud.reducer';

export interface State {
  comicSearch: fromComicSearchReducer.State;
  comicCrud: fromComicCrudReducer.State;
}

export const reducers = {
  comicSearch: fromComicSearchReducer.reducer,
  comicCrud: fromComicCrudReducer.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

export const getSearchState = (state: State) => state.comicSearch;
export const getSearchResults = createSelector(getSearchState, fromComicSearchReducer.getSearchResults);

export const getComicCrudState = (state: State) => state.comicCrud;
export const getMyComics = createSelector(getComicCrudState, fromComicCrudReducer.getMyComics);
