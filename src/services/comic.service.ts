import {Injectable} from "@angular/core";
import {RxHttpRequest, CoreOptions} from "rx-http-request";
import {Observable} from "rxjs";
import {Comic, ComicVineComic, ToAppComic} from "../models/comic";
import {List} from "immutable";
import {LoadingController} from "ionic-angular";

@Injectable()
export class ComicService {
  constructor(public loadingCtrl: LoadingController) {
  }

  SearchComics(options?: CoreOptions, query?: string): Observable<List<Comic>> {

    let loading = this.loadingCtrl.create({
      content: 'Searching ComicVine'
    });
    loading.present();

    query = query ? query : "flash";

    return RxHttpRequest.get("http://comicvine.gamespot.com/api/issues/", {
      qs: {
        "api_key": "1029e36327f4b78222e826cfc08b50cf22d61828",
        "field_list": "name,store_date,site_detail_url,image,cover_date,issue_number,id",
        "format": "json",
        "limit": 20,
        "page": 1,
        "filter": "name:" + query,
        //add filter for issue_number
        //add filter for store_date
        "resources": "issue",
        "sort": "cover_date:desc"
      },
      json: true
    }).map(comicSearchResult => {
      loading.dismiss();
      return null;
      //return List(comicSearchResult.body.results.map(comic => ToAppComic(comic)));
    });
  }
}
