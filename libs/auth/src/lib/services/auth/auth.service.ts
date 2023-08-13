/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from './../../../../../data-models/src/lib/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthenticate } from 'libs/data-models/src/lib/IAuthenticate';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject$ = new BehaviorSubject<any>(null);
  user$ = this.userSubject$.asObservable();

  constructor(private httpClient: HttpClient) {
    const user = localStorage.getItem('user');
    if (user) {
      this.userSubject$.next(JSON.parse(user));
    }
  }

  login(authenticate: IAuthenticate): any {
    // return this.httpClient.post<User>('http://localhost:3000/login', authenticate)
    // .pipe(tap((user: User) => this.userSubject$.next(user)));
    let userObj = new User ();
    userObj.id = 1;
    userObj.username = 'khalifa';
    userObj.token = 'sdasdsadasfdsad';
    userObj.role = 'Admin';
    console.log("auth service ");

     this.userSubject$.next(userObj);
     localStorage.setItem('user', JSON.stringify(userObj));
  }
}
