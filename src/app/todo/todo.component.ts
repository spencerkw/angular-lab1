import { Component } from '@angular/core';
import { Todo } from '../todo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
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

  addTodo(todoForm: NgForm): void {
    //console.log(todoForm);
    this.todoList.push({
      task: todoForm.value.todo,
      completed: false
    });
    todoForm.resetForm();
  }

  removeTodo(index: number): void {
    this.todoList.splice(index, 1);
  }

  completeTodo(index: number): void {
    this.todoList[index].completed = true;
  }

  filterList(event): void {
    console.log(event.target.value);
  }
}
