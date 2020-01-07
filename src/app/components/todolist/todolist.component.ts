import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  // properties for the todo model
  // we want to include the added date/time to do the object later, will need to add via html
  // the properties for todo are defined in the interface file
  todos: Todo[];
  todoTitle: string;
  idForTodo: number;

  constructor() { }

  ngOnInit() {
    // starting state of the todo list
    // TODO return the array of todos from local storage
    this.todoTitle = '';
    this.idForTodo = 0;
    this.todos = []
  }

  // this todo method will add a new todo to the list
  // added a return type here to conform to typescript syntax
  addTodo(): void {
    // push data directly to the todos array
    // check for empty string and early return if string length is 0.
    if(this.todoTitle.trim().length == 0) {
      return;
    }

    this.todos.push({
      id: this.idForTodo,
      title: this.todoTitle,
      completed: false,
      editing: false,
    })

    // clear textbox after enter
    this.todoTitle = '';
    // find max ID for todo and set the maxid variable to be the highest id
    var maxid = 0;
    this.todos.forEach(function(todo){
      if(todo.id > maxid) maxid = todo.id;
    })

    console.log('maxid value ' + maxid);

    // if the todo id is >= the maxid, idForTodo++
    if(maxid >= this.idForTodo) {
      this.idForTodo++;
    }

    console.log('idForTodo Value ' + this.idForTodo);
  }


  deleteTodo(id: number): void {
    // filters on the list of todos in the arry and looks for the matching id we pass in
    this.todos = this.todos.filter(todo => todo.id != id);
  }

  // filters on the list of todos and looks for ones that do not have the boolean completed as true
  todoRemaining(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  checkAllTodos(): void {
    // for event.target.checked to work here, i've had to cast event.target to a HTML input element
    this.todos.forEach(todo => todo.completed = (<HTMLInputElement>event.target).checked);
  }

}


