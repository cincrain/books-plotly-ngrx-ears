import { Injectable, Inject, InjectionToken, Optional } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as BooksARS from '../store/books/index';
import { Book } from '../models/book';

import { GoogleBooksService } from '@core/services/index';
import { toPayload } from '@shared/utils/data.utils';
import { of, empty, asyncScheduler } from 'rxjs';
import { map, switchMap, takeUntil, skip, debounceTime, catchError
} from 'rxjs/operators';
import { Scheduler } from 'rxjs/internal/Scheduler';


export const SEARCH_DEBOUNCE  = new InjectionToken<number> ('Search Debounce');
export const SEARCH_SCHEDULER = new InjectionToken<Scheduler> ('Search Scheduler');

@Injectable ()
export class BooksEffects {
  constructor (
    private actions$: Actions
    , private googleBooksService: GoogleBooksService
    , @Optional () @Inject (SEARCH_DEBOUNCE)
      private debounce: number
    , @Optional () @Inject (SEARCH_SCHEDULER)
      private scheduler: Scheduler
  ) {
  }//e constructor


  @Effect () search$
  = this.actions$.pipe (
    ofType<BooksARS.SearchE1R1> (BooksARS.ActionTypes.SEARCH)
    // , debounceTime (this.debounce || 300, this.scheduler || asyncScheduler)
    , debounceTime (300)
    , map (toPayload)
    , switchMap (query => {
      if (query === '') {
        return empty ();
      }
      const nextSearch$ = this.actions$.pipe (
        ofType (BooksARS.ActionTypes.SEARCH)
        , skip (1)
      );

      return this.googleBooksService.searchBooks (query).pipe (
        takeUntil (nextSearch$)
        , map ((books: Book[]) => new BooksARS.SearchCompleteE0R2 (books))
        , catchError (err => of (new BooksARS.SearchErrorE0R1 (err)))
      );
    })
  );
  //e searchE1R1
}
//e class
