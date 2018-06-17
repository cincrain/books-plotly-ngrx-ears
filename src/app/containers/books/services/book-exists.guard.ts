import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as BooksFRS from '../store/freducers-selectors';
import * as BooksARS from '../store/books/index';

import { GoogleBooksService } from '@core/services/index';
import { Observable, of } from 'rxjs';
import { map, switchMap, filter, tap, take, catchError} from 'rxjs/operators';


@Injectable ()
export class BookExistsGuard implements CanActivate {
  constructor (
    private store: Store<BooksFRS.IEBooksState>
    , private router: Router
    , private googleBooksService: GoogleBooksService
  ) {

  }//e constructor
  canActivate (route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.waitForCollectionLoad ().pipe (
      switchMap (() => this.hasBook (route.params['id']))
    );
  }//e canActivate


  waitForCollectionLoad (): Observable<boolean> {
    return this.store.pipe (
      select (BooksFRS.getCollectionLoaded)
      , filter (loaded => loaded)
      , take (1)
    );
  }//e waitForCollectionLoad


  hasBook (id: string): Observable<boolean> {
    return this.hasBookInStore (id).pipe (
      switchMap (inStore => {
        if (inStore) {
          return of (inStore);
        }

        return this.hasBookInApi (id);
      })
    );
  }//e hasBook


  hasBookInStore (id: string): Observable<boolean> {
    return this.store.pipe (
      select (BooksFRS.getBookEntities)
      , map (entities => !!entities[id])
      , take (1)
    );
  }//e hasBookInStore


  hasBookInApi (id: string): Observable<boolean> {
    return this.googleBooksService.retrieveBook (id).pipe (
      map (bookEntitiy => new BooksARS.LoadE0R1 (bookEntitiy))
      , tap ((action: BooksARS.LoadE0R1) => this.store.dispatch (action))
      , map (book => !!book)
      , catchError (() => {
        this.router.navigate (['/404']);
        return of (false);
      })
    );
  }//e hasBookApi
}
//e class
