import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoModel} from "../../model/todo-model";
import { v4 as uuid } from 'uuid';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  addText: string = '';

  @Output() onChanged = new EventEmitter<TodoModel>();

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  addTodo() {
    if (this.addText.trim().length > 0) {
      const newTodo: TodoModel = {
        id: uuid(),
        completed: false,
        title: this.addText
      }
      this.onChanged.emit(newTodo);
      this.addText = '';
    } else {
      this.toastr.error('Чтобы добавить задание введите название задания', 'Ошибка')
    }

  }
}
