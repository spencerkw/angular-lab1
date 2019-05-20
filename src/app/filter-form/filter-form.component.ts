import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {

  @Output() onFilterList = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  filterList(event): void {
    this.onFilterList.emit(event);
  }

}
