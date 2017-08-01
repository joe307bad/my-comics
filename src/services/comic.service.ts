import {Injectable} from "@angular/core";
import {RxHttpRequest, CoreOptions} from "rx-http-request";
import {Observable} from "rxjs";
import {Comic} from "../models/comic";
import {List} from "immutable";

@Injectable()
export class ComicService {
  constructor() {
  }

  SearchComics(options?: CoreOptions, query?: string): Observable<Array<Comic>> {
    return RxHttpRequest.get("http://comicvine.gamespot.com/api/issues/", {
      qs: {
        "api_key": "1029e36327f4b78222e826cfc08b50cf22d61828",
        "field_list": "name,store_date,site_detail_url,image,cover_date,issue_number",
        "format": "json",
        "limit": 20,
        "page": 1,
        "filter": "name:" + query,
        "resources": "issue",
        "sort": "cover_date:desc"
      }
    }).map(comicSearchResult => JSON.parse(comicSearchResult.body).results);
  }
}
