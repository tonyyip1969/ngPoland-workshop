import {Component, Input, Output, EventEmitter} from "@angular/core";
import {ListActionsService} from "../actions/list-actions.service";

@Component({
  selector: 'app-item',
  template: `
    <li class="list-group-item">{{item.title}}
    <span class="close" (click)="itemClicked.emit(item)">X</span></li>
  `,

})
export class ItemComponent {
  @Input() item: any;
  @Output() itemClicked = new EventEmitter<any>()

}
