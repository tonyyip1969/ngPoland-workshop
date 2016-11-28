import { Todolist } from './../todolist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-items',
  template: `  
  <ul class="todo-list">
    <app-td-item *ngFor="let item of list.items" [item]="item">
     </app-td-item>                            
  </ul>    
  `  
})
export class TdItemsComponent  {
  constructor(private list: Todolist) {}
}


