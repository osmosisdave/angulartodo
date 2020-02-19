import { Injectable } from '@angular/core';
import { Todo } from './interfaces/todo';

@Injectable()

export class StorageManagerService {

  getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  setLocalStorage(key: string, data): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  clear() {
    localStorage.clear();
  }

  removeItem(key: string) {
    localStorage.removeItem(key)
  }

}


