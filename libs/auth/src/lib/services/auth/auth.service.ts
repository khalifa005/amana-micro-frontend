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

  constructor(private httpClient: HttpClient) {}

  login(authenticate: IAuthenticate): Observable<User> {
    return this.httpClient.post<User>('http://localhost:3000/login', authenticate)
    .pipe(tap((user: User) => this.userSubject$.next(user)));
  }
}
