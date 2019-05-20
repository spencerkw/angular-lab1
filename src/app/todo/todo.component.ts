import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [
    {
      task: "Walk the dog",
      completed: false
    },
    {
      task: "Go to the store",
      completed: true
    },
    {
      task: "Get gas",
      completed: false
    },
    {
      task: "Wash the car",
      completed: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
