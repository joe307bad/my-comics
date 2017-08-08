import { IonicPageModule} from "ionic-angular";
import {PipeModule} from "../../utilities/pipe.module";
import {SearchPage} from "./search";

export let searchImports = [
  PipeModule,
  IonicPageModule.forChild(SearchPage)
];

export let searchProviders = [
];

export let searchDeclarations = [
  SearchPage
];
