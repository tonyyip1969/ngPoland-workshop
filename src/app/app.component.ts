import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <h1>NgPoland Angular Workshop</h1>
    <input type="text">
    <app-list></app-list>
    </div>
`,
})
export class AppComponent {
  title = 'app works!';
}
