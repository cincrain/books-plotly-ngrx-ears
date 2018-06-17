import { NavigationExtras } from '@angular/router';
import { Action } from '@ngrx/store';


export enum ActionTypes {
  GO        = '[Router] go',
  BACK      = '[Router] back',
  FORWARD   = '[Router] forward',
}
//e enum


export class GoE0R0 implements Action {
  readonly type = ActionTypes.GO;
  constructor (public payload: {
    path:     any[],
    query:    object,
    extras?:   NavigationExtras
  }) {}
}
export class BackE0R0 implements Action {
  readonly type = ActionTypes.BACK;
  constructor (public payload = '') {}
}
export class ForwardE0R0 implements Action {
  readonly type = ActionTypes.FORWARD;
  constructor (public payload = '') {}
}
//e class


export type Actions =
  | GoE0R0
  | BackE0R0
  | ForwardE0R0;
//e type
