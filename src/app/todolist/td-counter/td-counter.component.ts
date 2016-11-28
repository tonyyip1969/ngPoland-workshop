import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-counter',
  template: `
    <span class="todo-count">
      <strong>1</strong>
      item left
    </span>
  `
})
export class TdCounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
