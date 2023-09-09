import { Component,Input,EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {
@Input() todo!: Todo;
@Output() todoDelete: EventEmitter<Todo>= new EventEmitter();
onClick(todo : Todo){
  console.log("clickedddd")
this.todoDelete.emit(todo);
}
}
