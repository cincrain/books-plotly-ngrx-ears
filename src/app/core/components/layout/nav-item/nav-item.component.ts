import { Component, Input, Output, ChangeDetectionStrategy
  , EventEmitter
} from '@angular/core';


@Component ({
  selector: 'bc-nav-item',
  template: `
  <a mat-list-item
    [routerLink]="routerLink"
    (click)="navigate.emit ()" >
    <mat-icon mat-list-icon>{{ icon }}</mat-icon>
    <span mat-line>
      <ng-content></ng-content>
    </span>
    <span class="secondary" mat-line>
      {{ hint }}
    </span>
  </a>  
  `,
  styles: [`
  .secondary {
    color: rgba(0,0,0, 0.54);
  }  
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavItemComponent {
  @Input  () icon     = '';
  @Input  () hint     = '';
  @Input  () routerLink: string | any[] = '/';
  @Output () navigate = new EventEmitter ();

  constructor () {
  }//e constructor
}
//e class
