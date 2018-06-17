import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as LayoutFRS from '@store/freducers-selectors';
import * as LayoutARS from '@store/layout/index';
import * as AuthFRS from '@containers/auth/store/freducers-selectors';
import * as AuthARS from '@containers/auth/store/auth/index';

import { Observable } from 'rxjs';


@Component ({
  selector: 'bc-app',
  template: `
  <bc-layout>
  
    <bc-sidenav [open]="showSidenav$ | async">
      <bc-nav-item *ngIf="loggedIn$ | async"
        icon="book" hint="View your book collection"
        routerLink="/"
        (navigate)="closeSidenav ()" >
        My Collection
      </bc-nav-item>

      <bc-nav-item *ngIf="loggedIn$ | async"
        icon="search" hint="Find your next book!"
        routerLink="/books/find"
        (navigate)="closeSidenav ()" >
        Browse Books
      </bc-nav-item>

      <bc-nav-item *ngIf="!(loggedIn$ | async)"
        (navigate)="closeSidenav ()" >
        Sign In
      </bc-nav-item>

      <bc-nav-item *ngIf="loggedIn$ | async"
        (navigate)="logout ()" >
        Sign Out
      </bc-nav-item>
    </bc-sidenav>

    <bc-toolbar (openMenu)="openSidenav ()">
      Book Collection
    </bc-toolbar>

    <router-outlet></router-outlet>
  </bc-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  showSidenav$: Observable<boolean>;
  loggedIn$:    Observable<boolean>;

  constructor (private store: Store<LayoutFRS.IBooksPlotlyState>) {
    this.showSidenav$ = this.store.pipe (select (LayoutFRS.getShowSidenav));
    this.loggedIn$    = this.store.pipe (select (AuthFRS.getLoggedIn));
  }//e constructor


  closeSidenav () {
    this.store.dispatch (new LayoutARS.CloseSidenavE0R1 ());
  }//e closeSidenav


  openSidenav () {
    this.store.dispatch (new LayoutARS.OpenSidenavE0R1 ());
  }//e openSidenav


  logout () {
    this.closeSidenav ();
    this.store.dispatch (new AuthARS.LogoutE1R1 ());
  }//e logout
}
//e class
