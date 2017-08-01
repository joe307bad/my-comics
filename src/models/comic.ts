import * as moment from 'moment';

export interface Comic {
  Id: number;
  Name: string;
  Image?: string;
  Number: string;
  StoreDate: moment.Moment;
}

export interface Image {
  icon_url: string;
  medium_url: string;
  screen_url: string;
  small_url: string;
  super_url: string;
  thumb_url: string;
  tiny_url: string;
}

export interface ComicVineComic {
  cover_date: string;
  id: number;
  image?: Image;
  issue_number: string;
  name: string;
  site_detail_url: string;
  store_date: string;
}

export function ToAppComic(comicVineComic: ComicVineComic): Comic{
  return {
    Id: comicVineComic.id,
    Name: comicVineComic.name,
    Image: comicVineComic.image ? comicVineComic.image.icon_url : null,
    Number: comicVineComic.issue_number,
    StoreDate: moment(comicVineComic.store_date, "YYYY-MM-DD")
  }
}

