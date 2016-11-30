import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button',
  template: `
    <button (click)="action.emit('nir')" class="clear-completed">{{label}}</button>
  `,
  styles: []
})
export class ActionButtonComponent  {

  @Input() 
  public label: string;

  @Output() 
  public action: EventEmitter<string> = new EventEmitter();

}
