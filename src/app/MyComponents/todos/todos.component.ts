// import { Component,OnInit } from '@angular/core';
// import { Todo } from '../../Todo';
// @Component({
//   selector: 'app-todos',
//   templateUrl: './todos.component.html',
//   styleUrls: ['./todos.component.css']
// })
// export class TodosComponent implements OnInit {
// todos:Todo[]
// localItem:string

// constructor(){
//   this.localItem=localStorage.getItem("todos")??""
//   if(this.localItem==null){
//   this.todos=[];
//   }
//   else{
//     this.todos = JSON.parse(this.localItem);
//   }
// }

// deleteTodo(todo:Todo){
//   console.log(todo)
//   const index=this.todos.indexOf(todo)
//   this.todos.splice(index,1)
//   localStorage.setItem("todos",JSON.stringify(this.todos));
// }
// addTodo(todo: Todo){
//   console.log(todo)
//   this.todos.push(todo)
//   localStorage.setItem("todos",JSON.stringify(this.todos));
// }
// ngOnInit(): void {
  
// }
// }


import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  localItem: string;

  constructor() {
    this.localItem = localStorage.getItem("todos") ?? "";

    if (this.localItem) {
      try {
        this.todos = JSON.parse(this.localItem);
      } catch (e) {
        console.error("Error parsing JSON from localStorage:", e);
        // Handle the error gracefully, e.g., set this.todos to a default value.
      }
    }
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  ngOnInit(): void {
    // Your initialization code here
  }
}
