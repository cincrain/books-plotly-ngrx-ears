import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../../models/book';


@Component ({
  selector: 'bc-book-preview',
  template: `
  <a [routerLink]="['/books', id]">
    <mat-card>

      <mat-card-title-group>
        <img *ngIf="thumbnail" mat-card-sm-image
          [src]="thumbnail" >
        <mat-card-title>{{ title | bcEllipsis:35 }}</mat-card-title>
        <mat-card-subtitle *ngIf="subtitle">
          {{ subtitle | bcEllipsis:40 }}
        </mat-card-subtitle>
      </mat-card-title-group>

      <mat-card-content>
        <p *ngIf="description">{{ description | bcEllipsis }}</p>
      </mat-card-content>

      <mat-card-footer>
        <bc-book-authors [book]="book"></bc-book-authors>
      </mat-card-footer>
    
    </mat-card>
  </a>
  `,
  styleUrls: ['./book-preview.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookPreviewComponent {
  @Input  () book: Book;

  get id () {
    return this.book.id;
  }//e id

  get title () {
    return this.book.volumeInfo.title;
  }

  get subtitle () {
    return this.book.volumeInfo.subtitle;
  }

  get description () {
    return this.book.volumeInfo.description;
  }

  get thumbnail (): string | boolean {
    if (this.book.volumeInfo.imageLinks) {
      return this.book.volumeInfo.imageLinks.smallThumbnail;
    }
    return false;
  }//e thumbnail

  constructor () {
  }//e constructor
}
//e class
