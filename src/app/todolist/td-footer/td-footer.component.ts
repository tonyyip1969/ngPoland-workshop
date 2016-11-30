import { Todolist } from './../todolist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-footer',
  template: `
  <footer class="footer">    
    <app-td-counter [value]="list.items | count:'done':false"></app-td-counter>
    <app-action-button (action)="list.clearCompleted($event)" label="clear"></app-action-button>    
  </footer>    
  `  
})
export class TdFooterComponent  {

  constructor(private list: Todolist) {}

}
