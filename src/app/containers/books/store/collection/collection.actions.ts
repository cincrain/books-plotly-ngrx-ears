import { Action } from '@ngrx/store';
import { Book } from '../../models/book';


export enum ActionTypes {
  LOAD                  = '[Collection] load',
  LOAD_SUCCESS          = '[Collection] load success',
  LOAD_FAIL             = '[Collection] load fail',
  ADD_BOOK              = '[Collection] add book',
  ADD_BOOK_SUCCESS      = '[Collection] add book success',
  ADD_BOOK_FAIL         = '[Collection] add book fail',
  REMOVE_BOOK           = '[Collection] remove book',
  REMOVE_BOOK_SUCCESS   = '[Collection] remove book success',
  REMOVE_BOOK_FAIL      = '[Collection] remove book fail',
}
//e enum


export class LoadE1R1 implements Action {
  readonly type = ActionTypes.LOAD;
  constructor (public payload = '') {}
}
export class LoadSuccessE0R1 implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor (public payload: Book[]) {}
}
export class LoadFailE0R0 implements Action {
  readonly type = ActionTypes.LOAD_FAIL;
  constructor (public payload: any) {}
}
export class AddBookE1R0 implements Action {
  readonly type = ActionTypes.ADD_BOOK;
  constructor (public payload: Book) {}
}
export class AddBookSuccessE0R1 implements Action {
  readonly type = ActionTypes.ADD_BOOK_SUCCESS;
  constructor (public payload: Book) {}
}
export class AddBookFailE0R1 implements Action {
  readonly type = ActionTypes.ADD_BOOK_FAIL;
  constructor (public payload: Book) {}
}
export class RemoveBookE1R0 implements Action {
  readonly type = ActionTypes.REMOVE_BOOK;
  constructor (public payload: Book) {}
}
export class RemoveBookSuccessE0R1 implements Action {
  readonly type = ActionTypes.REMOVE_BOOK_SUCCESS;
  constructor (public payload: Book) {}
}
export class RemoveBookFailE0R1 implements Action {
  readonly type = ActionTypes.REMOVE_BOOK_FAIL;
  constructor (public payload: Book) {}
}
//e class


export type Actions =
  | LoadE1R1
  | LoadSuccessE0R1
  | LoadFailE0R0
  | AddBookE1R0
  | AddBookSuccessE0R1
  | AddBookFailE0R1
  | RemoveBookE1R0
  | RemoveBookSuccessE0R1
  | RemoveBookFailE0R1;
//e type
