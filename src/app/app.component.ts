import { Component } from '@angular/core';
import { Event } from '_debugger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    this.todos = todos;
  }

  todos: string[];

  addTodo(todo: HTMLInputElement) {
    if (todo.value) {
      this.todos.push(todo.value);
    }
    todo.value = null;
    return false;
  }

  removeTodo(todo: string) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

}

const todos = ['Build home', 'Grow tree'];
