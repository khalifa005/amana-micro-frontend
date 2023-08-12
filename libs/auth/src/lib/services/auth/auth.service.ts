import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthenticate } from 'libs/data-models/src/lib/IAuthenticate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private httpClient: HttpClient) {}

  login(authenticate: IAuthenticate): Observable<any> {
    return this.httpClient.post('http://localhost:3000/login', authenticate);
  }
}
