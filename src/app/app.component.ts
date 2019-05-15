import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lab1';
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
  constructor() {}
  
}
