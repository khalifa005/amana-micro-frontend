/* eslint-disable @angular-eslint/no-output-native */
import { IAuthenticate } from './../../../../../data-models/src/lib/IAuthenticate';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'amana-micro-frontend-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  @Output() submit = new EventEmitter<IAuthenticate>();

  login(authenticate: IAuthenticate) {
    this.submit.emit(authenticate);
  }

}

