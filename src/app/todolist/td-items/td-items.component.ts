import { Router } from '@angular/router';
import { Todolist } from './../todolist';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-td-items',
  template: `  
  <ul class="todo-list">
    <app-td-item *ngFor="let item of items" [item]="item">
     </app-td-item>                            
  </ul>    
  `  
})
export class TdItemsComponent  {

  public items = [];

  constructor(http:Http) {
      
      fetch('http://localhost:3000/items')          
          .then( res => console.log(res.json()) )
         
  }

}


