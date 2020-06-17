import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() valueChange = new EventEmitter();

  public searchWord: string = '';

  public search(): void {
    this.valueChange.emit(this.searchWord);
  }

}
