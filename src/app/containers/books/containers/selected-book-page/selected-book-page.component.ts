import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IEBooksState } from '../../store/freducers-selectors';
import * as BooksFRS from '../../store/freducers-selectors';
import * as BooksARS from '../../store/books/index';
import * as CollectionARS from '../../store/collection/index';
import { Book } from '../../models/book';

import { Observable } from 'rxjs';


@Component ({
  selector: 'bc-selected-book-page',
  template: `
  <bc-book-detail
    [book]="book$ | async"
    [inCollection]="isSelectedBookInCollection$ | async"
    (add)="addToCollection ($event)"
    (remove)="removeFromCollection ($event)" >
  </bc-book-detail>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedBookPageComponent {
  book$:     Observable<Book>;
  isSelectedBookInCollection$: Observable<boolean>;

  constructor (private store: Store<IEBooksState>) {
    this.book$ = this.store.pipe (
      select (BooksFRS.getSelectedBook)
    );
    this.isSelectedBookInCollection$ = this.store.pipe (
      select (BooksFRS.isSelectedBookInCollection)
    );
  }//e constructor


  addToCollection (book: Book) {
    this.store.dispatch (new CollectionARS.AddBookE1R0 (book));
  }//e addToColection


  removeFromCollection (book: Book) {
    this.store.dispatch (new CollectionARS.RemoveBookE1R0 (book));
  }//e removeFromCollection
}
//e class
