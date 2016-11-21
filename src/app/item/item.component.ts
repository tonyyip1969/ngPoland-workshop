import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <li class="list-group-item">{{item.title}}<span class="close">X</span></li>
  `,

})
export class ItemComponent {
 @Input() item: any;
}
