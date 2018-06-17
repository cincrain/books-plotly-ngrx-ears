import { Component, Input, Output, ChangeDetectionStrategy
  , EventEmitter
} from '@angular/core';


@Component ({
  selector: 'bc-book-search',
  template: `
  <mat-card>
    <mat-card-title>Find a Book</mat-card-title>
    <mat-card-content>
      <mat-form-field>
        <input matInput placeholder="Search for a book"
          [value]="query"
          (keyup)="search.emit ($event.target.value)" >
      </mat-form-field>

      <mat-spinner
        [class.show]="searching"
        [diameter]="30"
        [strokeWidth]="3" >
      </mat-spinner>
    </mat-card-content>
  
    <mat-card-footer>
      <span *ngIf="error">{{ error }}</span>
    </mat-card-footer>  
  </mat-card>  
  `,
  styleUrls: ['./book-search.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookSearchComponent {
  @Input  () query      = '';
  @Input  () searching  = false;
  @Input  () error      = '';
  @Output () search     = new EventEmitter<string> ();

  constructor () {
  }//e constructor
}
//e class
