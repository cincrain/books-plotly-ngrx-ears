import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as BooksFRS from '../../store/freducers-selectors';
import * as BooksARS from '../../store/books/index';
import { Book } from '../../models/book';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';


@Component ({
  selector: 'bc-find-book-page',
  template: `
  <bc-book-search
    [query]="searchQuery$ | async"
    [searching]="loading$ | async"
    [error]="error$ | async"
    (search)="search ($event)" >
  </bc-book-search>

  <bc-book-preview-list
    [books]="books$ | async" >
  </bc-book-preview-list>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FindBookPageComponent {
  searchQuery$: Observable<string>;
  books$:       Observable<Book[]>;
  loading$:     Observable<boolean>;
  error$:       Observable<string>;

  constructor (private store: Store<BooksFRS.IEBooksState>) {
    this.searchQuery$ = this.store.pipe (
      select (BooksFRS.getSearchQuery)
      , take (1)
    );
    this.books$       = this.store.pipe (select (BooksFRS.getSearchResults));
    this.loading$     = this.store.pipe (select (BooksFRS.getSearchLoading));
    this.error$       = this.store.pipe (select (BooksFRS.getSearchError));
  }//e constructor


  search (query: string) {
    this.store.dispatch (new BooksARS.SearchE1R1 (query));
  }//e search
}
//e class
