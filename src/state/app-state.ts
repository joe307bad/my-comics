import {Comic} from "../models/comic"

export interface AppState{
  myComics: Comic[];
}

export const InitialAppState: AppState = {
  myComics: []
};
