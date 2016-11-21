import {Component} from "@angular/core";
import {StoreService} from "./store.service";
import {ListActionsService} from "./actions/list-actions.service";

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <h1>NgPoland Angular Workshop</h1>
   
    <input type="text" #input>
    <button (click)="list.addItem(input.value)">add</button>
    
    <app-list [items]="store.state" ></app-list>
    
    </div>
`,
})

export class AppComponent {
  private store: StoreService;
  private list: ListActionsService;

  constructor(store: StoreService, list: ListActionsService) {
    this.store = store;
    this.list  = list;

  }
}
