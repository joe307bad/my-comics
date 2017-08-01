import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {Comic} from "../../models/comic";
import {Observable} from "rxjs";
import {List} from "immutable";
import {Store} from "@ngrx/store";
import * as fromRoot from '../../state/reducers';
import * as comicSearch from '../../state/actions/comic-search.actions';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {State} from "../../state/reducers/index";

@IonicPage({
  name: 'search'
})
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers: [Store]
})
export class SearchPage {

  searchForm: FormGroup;
  searchResults: Observable<List<Comic>>;

  constructor(private store: Store<fromRoot.State>, private formBuilder: FormBuilder){

    this.searchForm = this.formBuilder.group({
      searchQuery:["",Validators.required]
    });

    this.searchResults = store.select(fromRoot.getSearchResults);


  }

  Search(): void{

    let query = this.searchForm.get('searchQuery').value;
    this.store.dispatch(new comicSearch.ComicSearchAction(query));
  }

  ClearResults(): void{
    this.store.dispatch(new comicSearch.ComicClearResultsAction());
  }

  ionViewDidLoad() {

  }

}
