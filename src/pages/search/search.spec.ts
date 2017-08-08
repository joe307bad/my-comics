import {TestBed} from '@angular/core/testing';
import {ComicSearchEffects} from "../../state/effects/comic-search.effects";
import {ReplaySubject} from "rxjs";
import {provideMockActions} from "@ngrx/effects/testing";
import * as comicSearch from '../../state/actions/comic-search.actions';
import {HttpModule} from "@angular/http";
import {ComicService} from "../../services/comic.service";
import {BrowserModule} from "@angular/platform-browser";
import {SearchPage} from "./search";
import {IonicModule} from "ionic-angular";
import {PipeModule} from "../../utilities/pipe.module";

describe('My Effects', () => {
  let effects: ComicSearchEffects;
  let actions: ReplaySubject<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ComicService,
        ComicSearchEffects,
        provideMockActions(() => actions),
        // other providers
      ],
      declarations: [
        SearchPage
      ],
      imports: [
        PipeModule,
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(SearchPage)
      ],
    });

    effects = TestBed.get(ComicSearchEffects);
  });

  it('should work also', () => {
    actions = new ReplaySubject(1);

    actions.next(new comicSearch.ComicSearchAction("the flash"));

    effects.comicSearchEffect.subscribe(result => {
      expect(result.type).toBe(comicSearch.SEARCH_COMIC_SUCCESS);
    });
  });
});
