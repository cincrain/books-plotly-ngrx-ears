import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as BooksFRS from '../../store/freducers-selectors';
import * as BooksARS from '../../store/books/index';

import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component ({
  selector: 'bc-view-book-page',
  template: `
  <bc-selected-book-page></bc-selected-book-page>  
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewBookPageComponent implements OnDestroy {
  actionsSubscription: Subscription;

  constructor (
    private store: Store<BooksFRS.IEBooksState>
    , private route: ActivatedRoute
  ) {
    this.actionsSubscription = route.params.pipe (
      map (params => new BooksARS.SelectE0R1 (params.id))
    )
    .subscribe (store);
  }//e constructor


  ngOnDestroy () {
    this.actionsSubscription.unsubscribe ();
  }//e ngOnDestroy
}
//e class
