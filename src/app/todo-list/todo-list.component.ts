import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todoList: Todo[];

  @Output() onCompleteTodo = new EventEmitter<any>();
  @Output() onRemoveTodo = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  completeTodo(index: number): void {
    this.onCompleteTodo.emit(index);
  }

  removeTodo(index: number): void {
    this.onRemoveTodo.emit(index);
  }

}
