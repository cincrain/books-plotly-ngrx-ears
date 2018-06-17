import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as AuthARS from '../../store/auth/index';
import * as AuthFRS from '../../store/freducers-selectors';
import { Authenticate } from '../../models/user';


@Component ({
  selector: 'bc-login-page',
  template: `
  <bc-login-form
    [pending]="pending$ | async"
    [errorMessage]="error$ | async"
    (submitted)="onSubmit ($event)" >
  </bc-login-form>  
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {
  pending$ = this.store.pipe (select (AuthFRS.getLoginPagePending));
  error$   = this.store.pipe (select (AuthFRS.getLoginPageError));

  constructor (private store: Store<AuthFRS.IEAuthState>) {
  }//e constructor
  ngOnInit () {
  }//e ngOnInit


  onSubmit ($event: any) {
    this.store.dispatch (new AuthARS.LoginE1R1 ($event));
  }//e onSubmit
}
//e class
