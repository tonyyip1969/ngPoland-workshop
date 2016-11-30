import { Todolist } from './../todolist';
import { Item } from './../item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-td-item',
  template: `
    <li [ngClass]="{ completed: item.done }">
        <div class="view">

          <input class="toggle"          
                 type="checkbox"                 
                 [(ngModel)]="item.done">
       
          <label sunshine>{{ item.title | upup:'!':'_' }}</label>
                   
          <button (click)="list.removeItem(item)" class="destroy"></button>

        </div>

        <input class="edit">

      </li>      
  `
})
export class TdItemComponent  {

  @Input()
  public item:Item;
  public isVisiable: boolean = true;

  constructor(private list: Todolist) {

  }

  
}
