import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  @Output() onAddTodo = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  addTodo(todoForm: NgForm): void {
    this.onAddTodo.emit(todoForm);
  }

}
