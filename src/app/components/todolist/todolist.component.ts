import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  todos: object[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        'id': 0,
        'title': 'Default to do (please delete)',
        'completed': false,
        'editing': false,
      }
    ]
  }

}
