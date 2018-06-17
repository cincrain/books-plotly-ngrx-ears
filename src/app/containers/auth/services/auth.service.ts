import { Injectable } from '@angular/core';
import { Authenticate, User } from '../models/user';

import { Observable, of, throwError } from 'rxjs';


@Injectable ()
export class AuthService {
  constructor () {
  }//e constructor


  login ({ username, password }: Authenticate): Observable<User> {
    if (username !== 'books') {
      return throwError ('사용자이름(books)과 비밀번호(ANY)를 확인하세요');
    }
    return of ({ name: '새사용자' });
  }//e login


  logout () {
    return  of (true);
  }//e logout
}
//e class
