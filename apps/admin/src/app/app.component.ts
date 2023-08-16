import { environment } from '@amana-micro-frontend/shared-environments';
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'amana-micro-frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor( private router:Router){

  }

  ngOnInit(): void {
    // this.router.navigateByUrl("/auth/login");
    console.log("environment.production");
    console.log(environment.apiBaseUrl);
  }

  title = 'admin';
}
