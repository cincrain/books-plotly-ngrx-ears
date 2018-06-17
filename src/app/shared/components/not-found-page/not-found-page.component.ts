import { Component } from '@angular/core';


@Component ({
  selector: 'bc-not-found-page',
  template: `
  <mat-card>
    <mat-card-title>404 Not Found</mat-card-title>
    <mat-card-content>
      <p>
        Hey! It looks like this page doesn't exist you.
      </p>
    </mat-card-content>
    <mat-card-actions>
      <button mat-raised-button color="primary"
        routerLink="/" >
        Home
      </button>
    </mat-card-actions>  
  </mat-card>  
  `,
  styles: [`
  :host {
    text-align: center;
  }  
  `]
})
export class NotFoundPageComponent {
  constructor () {
  }//e constructor
}
//e class
