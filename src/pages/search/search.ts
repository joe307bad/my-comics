import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {Comic} from "../../models/comic";
import {Observable} from "rxjs";
import {List} from "immutable";
import {Store} from "@ngrx/store";
import * as fromRoot from '../../state/reducers';
import * as comicSearch from '../../state/actions/comic-search.actions';

@IonicPage({
  name: 'search'
})
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers: [Store]
})
export class SearchPage {

  searchResults: Observable<List<Comic>>;

  constructor(private store: Store<fromRoot.State>) {
    //this.searchResults = store.select(fromRoot.getSearchResults1);
  }

  Search(): void{
    this.store.dispatch(new comicSearch.ComicSearchAction());
  }

  ionViewDidLoad() {

  }

}
