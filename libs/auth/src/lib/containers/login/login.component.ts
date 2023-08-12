import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amana-micro-frontend-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit() {

  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  login(authenticate:any) {
    console.log(authenticate);
  }

}
