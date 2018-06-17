import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as AuthARS from '../store/auth/index';
import { Authenticate } from '../models/user';

import { AuthService } from '../services/auth.service';
import { toPayload } from '@shared/utils/data.utils';
import { of } from 'rxjs';
import { map, exhaustMap, tap, catchError } from 'rxjs/operators';


@Injectable ()
export class AuthEffects {
  constructor (
    private actions$: Actions
    , private router: Router
    , private authService: AuthService
  ) {
  }//e constructor


  @Effect () login$ 
  = this.actions$.pipe (
    ofType<AuthARS.LoginE1R1> (AuthARS.ActionTypes.LOGIN)
    , map (toPayload)
    , exhaustMap ((auth: Authenticate) => 
        this.authService.login (auth).pipe (
          map (user => new AuthARS.LoginSuccessE1R1 ({ user }))
          , catchError (err => of (new AuthARS.LoginFailE0R1 (err)))
        )
    )
  );
  //e login$


  @Effect ({ dispatch: false }) loginSuccess$
  = this.actions$.pipe (
    ofType<AuthARS.LoginSuccessE1R1> (AuthARS.ActionTypes.LOGIN_SUCCESS)
    , tap (() => this.router.navigate (['/']))
  );
  //e loginSuccess$


  @Effect ({ dispatch: false }) loginRedirect$ 
  = this.actions$.pipe (
    // <AuthARS.LoginRedirectE1R0, AuthARS.LogoutE1R1>
    ofType (AuthARS.ActionTypes.LOGIN_REDIRECT, AuthARS.ActionTypes.LOGOUT)
    , map (toPayload)
    , tap (authed => this.router.navigate (['/login']))
  );
  //e loginRedirect$


}
//e class
