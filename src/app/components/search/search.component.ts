import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() valueChange = new EventEmitter();

  public searchWord: string = '';

  ngOnInit(): void {

  }

  public search() {
    this.valueChange.emit(this.searchWord);
  }

}
