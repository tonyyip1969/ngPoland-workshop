import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-list',
  template: `
    <ul class="list-group">
      <app-item *ngFor="let item of items"
                 [item]="item">                 
      </app-item>
    </ul>
  `,
})
export class ListComponent {
  @Input() items: any[];
}
