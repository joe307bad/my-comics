import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {ComicService} from "../services/comic.service";
import {Comic} from "../models/comic";
import {List} from "immutable"

@Injectable()
export class ComicStore {
  private _comicSearchResults: BehaviorSubject<List<Comic>> = new BehaviorSubject(List([]));

  constructor(private comicService: ComicService) {
  }

  get searchResults(): Observable<List<Comic>> {
    return this._comicSearchResults.asObservable();
  }

  loadSearchResults(): void{

    this.comicService.SearchComics({})
      .subscribe(res => this._comicSearchResults.next(List(res)))

  }
}
