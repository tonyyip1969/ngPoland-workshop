import { Todolist } from './../todolist';
import { Item } from './../item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-td-item',
  template: `
    <li>
        <div class="view">

          <input class="toggle"
                 type="checkbox"
                 [checked]="item.done">

          <label>{{ item.title }}</label>

          <button (click)="list.removeItem(item)" class="destroy"></button>

        </div>

        <input class="edit">

      </li>      
  `
})
export class TdItemComponent  {

  @Input()
  public item:Item;

  constructor(private list: Todolist) { }
}
