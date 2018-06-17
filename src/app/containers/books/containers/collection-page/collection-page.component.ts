import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as BooksFRS from '../../store/freducers-selectors';
import * as CollectionARS from '../../store/collection/index';
import { Book } from '../../models/book';

import { Observable } from 'rxjs';


@Component ({
  selector: 'bc-collection-page',
  template: `
  <mat-card>
    <mat-card-title>My Collection</mat-card-title>
  </mat-card>
    
  <bc-book-preview-list [books]="books$ | async"></bc-book-preview-list>
  `,
  styles: [`
  mat-card-title {
    display: flex;
    justify-content: center;
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionPageComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor (private store: Store<BooksFRS.IEBooksState>) {
    this.books$ = this.store.pipe (select (BooksFRS.getBookCollection));
  }//e constructor


  ngOnInit () {
    this.store.dispatch (new CollectionARS.LoadE1R1 ());
  }//e ngOnInit
}
//e class
