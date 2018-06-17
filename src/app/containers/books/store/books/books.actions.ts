import { Action } from '@ngrx/store';
import { Book } from '../../models/book';


export enum ActionTypes {
  SEARCH                = '[Books] search',
  SEARCH_COMPLETE       = '[Books] search complete',
  SEARCH_ERROR          = '[Books] search error',
  LOAD                  = '[Books] load',
  SELECT                = '[Books] select',
}
//e enum


export class SearchE1R1 implements Action {
  readonly type = ActionTypes.SEARCH;
  constructor (public payload: string) {}
}
export class SearchCompleteE0R2 implements Action {
  readonly type = ActionTypes.SEARCH_COMPLETE;
  constructor (public payload: Book[]) {}
}
export class SearchErrorE0R1 implements Action {
  readonly type = ActionTypes.SEARCH_ERROR;
  constructor (public payload: any) {}
}
export class LoadE0R1 implements Action {
  readonly type = ActionTypes.LOAD;
  constructor (public payload: Book) {}
}
export class SelectE0R1 implements Action {
  readonly type = ActionTypes.SELECT;
  constructor (public payload: string) {}
}
//e class


export type Actions =
  | SearchE1R1
  | SearchCompleteE0R2
  | SearchErrorE0R1
  | LoadE0R1
  | SelectE0R1;
//e type
