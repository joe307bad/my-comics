import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SearchPage} from './search';
import {DefaultDate} from "../../utilities/pipes";

@NgModule({
  declarations: [
    SearchPage,
    DefaultDate
  ],
  imports: [
    IonicPageModule.forChild(SearchPage)
  ],
})
export class SearchModule {
}

