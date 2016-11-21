import {Component} from "@angular/core";
import {StoreService} from "./store.service";
import {ListActionsService} from "./actions/list-actions.service";

@Component({
  selector: 'app-root',
  template: `

    <div *ngIf="!store.state.user.user.name" class="container">
      <app-login></app-login>
    </div>
    
    <span *ngIf="store.state.user.pending">LOADING....</span>

    <div *ngIf="store.state.user.user.name" class="container">
    <h1>Hello {{ store.state.user.user.name }}</h1>
   
    <input type="text" #input>
    <button (click)="list.addItem(input.value)">add</button>
    
    <app-list [items]="store.state.list" ></app-list>
    
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
