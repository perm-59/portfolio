import { Component, OnInit } from '@angular/core';
import {TodoModel} from "../model/todo-model";
import {UtilService} from "../service/util.service";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: any;
  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
    this.utilService.getTodo().subscribe((data: any) => {
      if (data.length > 0) {
        this.todos = data.map(todo => {
          todo.completed = false;
          return todo;
        })
      }
    })
  }

  selectTodo(id?: number) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        if (todo.completed === false) {
          todo.completed = true;
          return todo;
        } else {
          todo.completed = false;
          return todo;
        }
      } else {
        return todo
      }
    })
    console.log(this.todos)
  }

  deleteSelectTodo() {
    this.todos = this.todos.filter(todo => !todo.completed)
  }

  addTodo(newTodo: any) {
    this.todos.push(newTodo)
  }
}
