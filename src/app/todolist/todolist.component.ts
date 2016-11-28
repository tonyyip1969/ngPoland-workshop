import { Todolist } from './todolist';
import { Item } from './item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  template: `
  <section class="todoapp">
   <app-td-header [title]="title" ></app-td-header>
   <app-td-list></app-td-list>
   <app-td-footer></app-td-footer>
  </section>
  `
})
export class TodolistComponent  {
  
  public title: string;
  
  constructor() {       
    this.title = "TODOS";            
  }

}
