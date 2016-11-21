import {Component} from "@angular/core";
import {StoreService} from "./store.service";

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <h1>NgPoland Angular Workshop</h1>
    <input type="text">
     <button (click)="addItem()">Add</button>
    
    <app-list></app-list>
    
    </div>
`,
})

export class AppComponent {

  constructor(store: StoreService) {
    console.log(store.state);
  }

}
