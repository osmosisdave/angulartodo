import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { StorageManagerService } from '../../storage-manager.service';

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
  
  // inject the local storage manager service into the todolist component(dependency injection, how do you manage multiple injections?)
  constructor(private localStorage: StorageManagerService) { }

  // create the localstoragemanager variable so that the injected service methods can be called.
  storageManager = this.localStorage;

  ngOnInit() {
    // starting state of the todo list
    // TODO return the array of todos from local  storage
    this.todoTitle = '';
    this.idForTodo = 0;
    this.todos = this.getTodos();
  }

  getTodos(): Todo[] {
    var retrievedTodos = this.storageManager.getLocalStorage("todos");
    console.log(retrievedTodos)
    return retrievedTodos == null ? [] : retrievedTodos.todos;
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
    var maxid = Math.max(...this.todos.map(x => x.id));

    console.log('maxid value ' + maxid);

    // if the todo id is >= the maxid, idForTodo++
    if(maxid >= this.idForTodo) {
    this.idForTodo++;
    }

    this.storageManager.setLocalStorage("todos", this.todos);

    console.log('idForTodo Value ' + this.idForTodo);
  }

  deleteTodo(id: number): void {
    // filter the arry and remove the id sent in by clicking delete
    this.todos = this.todos.filter(todo => todo.id != id);

    // overwrite the locally stored array with the new filtered array.  ID's keep incrementing but i'm not sure if this is an issue?
    this.storageManager.setLocalStorage("todos", this.todos);
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


