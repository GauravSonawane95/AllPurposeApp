import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todos: { id: number; title: string; completed: boolean }[] = [];
  newTodoTitle: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle.trim());
      this.newTodoTitle = '';
      this.todos = this.todoService.getTodos();
    }
  }

  toggleCompletion(todo: { id: number; title: string; completed: boolean }): void {
    this.todoService.toggleTodoCompletion(todo.id);
  }

  deleteTodo(todo: { id: number; title: string; completed: boolean }): void {
    this.todoService.deleteTodo(todo.id);
    this.todos = this.todoService.getTodos();
  }
}
