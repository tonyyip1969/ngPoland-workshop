import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <ul class="list-group">
      <li class="list-group-item">Learn Redux <span class="close">X</span></li>
    </ul>
  `,
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
