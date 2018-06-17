import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as AuthARS from '../store/auth/index';
import * as AuthFRS from '../store/freducers-selectors';


import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';


@Injectable ()
export class AuthGuardService implements CanActivate {
  constructor (private store: Store<AuthFRS.IEAuthState>) {
  }//e constructor


  canActivate (): Observable<boolean> {
    return this.store.pipe (
      select (AuthFRS.getLoggedIn)
      , map (authed => {
          if (!authed) {
            this.store.dispatch (new AuthARS.LoginRedirectE1R0 ());
            return false;
          }
          return true;
      })
      , take (1)
    );
  }//e canActivate
}
//e class
