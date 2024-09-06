import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: { id: number; title: string; completed: boolean }[] = [];
  private nextId = 1;

  constructor() { }

  getTodos() {
    return this.todos;
  }

  addTodo(title: string) {
    const newTodo = {
      id: this.nextId++,
      title,
      completed: false
    };
    this.todos.push(newTodo);
  }

  toggleTodoCompletion(id: number) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
