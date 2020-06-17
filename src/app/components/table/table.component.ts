import { Issue } from './../models/issue.model';
import { Component, Input } from '@angular/core';

/**
 * Table where issues are shown.
 *
 * @export
 * @class TableComponent
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  /**
   * Issues.
   *
   * @type {Array<Issue>}
   * @memberof TableComponent
   */
  @Input() issues: Array<Issue>;

  /**
   * Flag that show and hide table skeleton.
   *
   * @type {boolean}
   * @memberof TableComponent
   */
  @Input() skeletons: boolean;
}
