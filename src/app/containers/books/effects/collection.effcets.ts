import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Database } from '@ngrx/db';
import * as CollectionARS from '../store/collection/index';
import { Book } from '../models/book';

import { toPayload } from '@shared/utils/data.utils';
import { Observable, defer, of } from 'rxjs';
import { map, mergeMap, switchMap, toArray, catchError } from 'rxjs/operators';


@Injectable ()
export class CollectionEffects {
  constructor (
    private actions$: Actions
    , private db: Database
  ) {
  }//e constructor


  @Effect ({ dispatch: false })
  openDb$: Observable<any>
  = defer (() => {
    return this.db.open ('books_db');
  });
  //e openDb$


  @Effect () 
  loadE1R1__from_ngOnInit_in_CollectionPageComponent$
  = this.actions$.pipe (
    ofType (CollectionARS.ActionTypes.LOAD)
    , switchMap (() => 
      this.db.query ('books').pipe (
        toArray ()
        , map ((books: Book[]) => new CollectionARS.LoadSuccessE0R1 (books))
        , catchError (err => of (new CollectionARS.LoadFailE0R0 (err)))
      )
    )
  )//e load


  @Effect () 
  addBookE1R0__from_addToCollection_in_SelectedBookPageComponent$
  = this.actions$.pipe (
    ofType<CollectionARS.AddBookE1R0> (CollectionARS.ActionTypes.ADD_BOOK)
    , map (toPayload)
    , mergeMap (book => 
      this.db.insert ('books', [book]).pipe (
        map (() => new CollectionARS.AddBookSuccessE0R1 (book))
        , catchError (err => of (new CollectionARS.AddBookFailE0R1 (err)))
      )
    )
  );
  //e addBookE1R0


  @Effect ()
  removeBookE1R0__from_removeFromCollection_in_SelectedBookPageComponent$
  = this.actions$.pipe (
    ofType<CollectionARS.RemoveBookE1R0> (CollectionARS.ActionTypes.REMOVE_BOOK)
    , map (toPayload)
    , mergeMap (book => 
      this.db.executeWrite ('books', 'delete', [book.id]).pipe (
        map (() => new CollectionARS.RemoveBookSuccessE0R1 (book))
        , catchError (err => of (new CollectionARS.RemoveBookFailE0R1 (book)))
      )
    )
  );
  //e removeBookE1R0
}
//e class
