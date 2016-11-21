import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {ListActionsService} from "../actions/list-actions.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-list',
  template: `
    <ul class="list-group">
      <app-item *ngFor="let item of items"
                 [item]="item"
                 (itemClicked)="list.removeItem($event)">                 
      </app-item>
    </ul>
  `,
})
export class ListComponent {
  @Input() items: any[];
  private list: ListActionsService;

  constructor(list: ListActionsService) {
    this.list = list;

  }
}
