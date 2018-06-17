import { Action } from '@ngrx/store';


export enum ActionTypes {
  OPEN_SIDENAV    = '[Layout] open sidenav',
  CLOSE_SIDENAV   = '[Layout] close sidenav',
}
//e enum


export class OpenSidenavE0R1 implements Action {
  readonly type = ActionTypes.OPEN_SIDENAV;
  constructor (public payload = '') {}
}
export class CloseSidenavE0R1 implements Action {
  readonly type = ActionTypes.CLOSE_SIDENAV;
  constructor (public payload = '') {}
}
//e class


export type Actions =
  | OpenSidenavE0R1
  | CloseSidenavE0R1;
//e type
