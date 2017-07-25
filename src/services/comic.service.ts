import {Injectable} from "@angular/core";
import {RxHR, CoreOptions} from "@akanass/rx-http-request";

@Injectable()
export class ComicService{
    constructor(){}

    SearchComic(options: CoreOptions){
        return RxHR.request({
            uri: "https://comicvine.gamespot.com/api/issues/",
            qs:{
                "api_key": "1029e36327f4b78222e826cfc08b50cf22d61828",
                "field_list": "name,store_date,site_detail_url,image,cover_date,issue_number",
                "format": "json",
                "limit": 20,
                "page": 1,
                "filter": "name:superman",
                "resources": "issue",
                "sort": "cover_date:desc"
            }
        })
    }
}