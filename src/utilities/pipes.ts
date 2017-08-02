import {Pipe, PipeTransform} from "@angular/core";
import * as moment from "moment";

@Pipe({
  name: "friendlyDate"
})
export class DefaultDatePipe implements PipeTransform {
  transform(value: moment.Moment): any {
    return value.format("LL");
  }
}
