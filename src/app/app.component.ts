import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <h1>NgPoland Angular Workshop</h1>
    <input type="text"><button (click)="addItem()"></button>
    
    <app-list [items]="items"></app-list>
    
    </div>
`,
})

export class AppComponent {
  private title: string;
  private items: any[];

  constructor() {
    this.title = 'TodoList';
    this.items = [
      { title: 'learn redux' }
    ]
  }

  public addItem(){
    this.items.push({ title: 'Hard code task' });
  }

}
