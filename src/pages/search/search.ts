import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {Comic} from "../../models/comic";
import {Observable} from "rxjs";
import {List} from "immutable";
import {Store} from "@ngrx/store";
import * as fromRoot from '../../state/reducers';

@IonicPage({
  name: 'search'
})
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchResults: Observable<List<Comic>>;

  constructor(private store: Store<fromRoot.State>) {
    this.searchResults = store.select(fromRoot.getSearchResults);
  }

  Search(): void{

  }

  ionViewDidLoad() {

  }

}
