import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SearchPage} from './search';
import {PipeModule} from "../../utilities/pipe.module";



@NgModule({
  declarations: [
    SearchPage
  ],
  imports: [
    PipeModule,
    IonicPageModule.forChild(SearchPage)
  ],
})
export class SearchModule {
}

