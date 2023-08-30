import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(objs: any, term: any): any {
    if (!term) {
      return objs;
    }
    return objs.filter((elt) =>
      elt.name.toLowerCase().includes(term.toLowerCase())
    );
  }
}
