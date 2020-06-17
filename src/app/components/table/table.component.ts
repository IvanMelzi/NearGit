import { Issue } from './../models/issue.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() issues: Array<Issue>;
  @Input() skeletons: boolean;
}
