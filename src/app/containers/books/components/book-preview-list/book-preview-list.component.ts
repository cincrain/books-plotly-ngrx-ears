import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../../models/book';


@Component ({
  selector: 'bc-book-preview-list',
  template: `
  <bc-book-preview *ngFor="let book of books" [book]="book"></bc-book-preview>  
  `,
  styles: [`
  :host {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }  
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookPreviewListComponent {
  @Input  () books: Book[];

  constructor () {
  }//e constructor
}
//e class
