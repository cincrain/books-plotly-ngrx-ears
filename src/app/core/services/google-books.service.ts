import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '@containers/books/models/book';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable ()
export class GoogleBooksService {
  private API_PATH = `https://www.googleapis.com/books/v1/volumes`;

  constructor (private http: HttpClient) {
  }//e constructor


  searchBooks (query: string): Observable<Book[]> {
    return this.http
      .get<{ items: Book[] }> (`${this.API_PATH}?q=${query}`)
      .pipe (
        map (books => books.items || [])
      );
  }//e searchBooks


  retrieveBook (volumeId: string): Observable<Book> {
    return this.http
      .get<Book> (`${this.API_PATH}/${volumeId}`);
  }//e retrieveBook 
}
//e class
