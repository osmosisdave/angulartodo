import { Injectable } from '@angular/core';
import { Todo } from './interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageManagerService {

  getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  setLocalStorageTodos(todos: Todo[]): void {
    localStorage.setItem("todos", JSON.stringify({todos: todos}));
  }

}


