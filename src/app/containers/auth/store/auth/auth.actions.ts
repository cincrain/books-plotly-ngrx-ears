import { Action } from '@ngrx/store';
import { Authenticate, User } from '../../models/user';

export enum ActionTypes {
  LOGIN           = '[Auth] login',
  LOGIN_SUCCESS   = '[Auth] login success',
  LOGIN_FAIL      = '[Auth] login fail',
  LOGIN_REDIRECT  = '[Auth] login redirect',
  LOGOUT          = '[Auth] logout',
}
//e enum


export class LoginE1R1 implements Action {
  readonly type = ActionTypes.LOGIN;
  constructor (public payload: Authenticate) {}
}
export class LoginSuccessE1R1 implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;
  constructor (public payload: { user: User }) {}
}
export class LoginFailE0R1 implements Action {
  readonly type = ActionTypes.LOGIN_FAIL;
  constructor (public payload: any) {}
}
export class LoginRedirectE1R0 implements Action {
  readonly type = ActionTypes.LOGIN_REDIRECT;
  constructor (public payload = '') {}
}
export class LogoutE1R1 implements Action {
  readonly type = ActionTypes.LOGOUT;
  constructor (public payload = '') {}
}
//e class


export type Actions =
  | LoginE1R1
  | LoginSuccessE1R1
  | LoginFailE0R1
  | LoginRedirectE1R0
  | LogoutE1R1;
//e type
