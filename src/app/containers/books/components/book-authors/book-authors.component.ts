import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../../models/book';


@Component ({
  selector: 'bc-book-authors',
  template: `
  <h5 mat-subheader>Written By:&nbsp;
  <span>
    {{ authors | bcAddCommas }}
  </span>
  </h5>
  `,
  styles: [`
  h5 {
    margin-bottom: 5px;
  }  
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookAuthorsComponent {
  @Input  () book: Book;

  get authors () {
    return this.book.volumeInfo.authors;
  }

  constructor () {
  }//e constructor
}
//e class
