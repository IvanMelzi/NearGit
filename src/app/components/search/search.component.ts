import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Search Input to filter issues.
 *
 * @export
 * @class SearchComponent
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {

  /**
   * Output listen the value to search.
   *
   * @memberof SearchComponent
   */
  @Output() valueChange = new EventEmitter();

  /**
   * Value to search.
   *
   * @type {string}
   * @memberof SearchComponent
   */
  public searchWord: string = '';

  /**
   * Emit the value to search in every change.
   *
   * @memberof SearchComponent
   */
  public search(): void {
    this.valueChange.emit(this.searchWord);
  }

}
