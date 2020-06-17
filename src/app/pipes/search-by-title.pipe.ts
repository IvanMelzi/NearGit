import { Issue } from './../components/models/issue.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByTitle'
})
export class SearchByTitlePipe implements PipeTransform {

  transform(issues: Array<Issue>, ...args: any) {
    if (args[0]) {
      return issues.filter((issue) => issue.title.toUpperCase().includes(args[0].toUpperCase()));
    } else {
      return issues;
    }
  }

}
