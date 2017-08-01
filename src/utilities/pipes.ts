import {Pipe, PipeTransform} from "@angular/core";
import * as moment from "moment";

@Pipe({
  name: "defaultDate"
})
export class DefaultDate implements PipeTransform {
  transform(value: moment.Moment): string {
    return value.format("LL");
  }
}
