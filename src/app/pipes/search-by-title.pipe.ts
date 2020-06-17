import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByTitle'
})
export class SearchByTitlePipe implements PipeTransform {

  transform(issues: Array<any>, ...args: any) {
    if (args[0]) {
      return issues.filter((issue) => issue.title.includes(args[0]));
    } else {
      return issues;
    }
  }

}
