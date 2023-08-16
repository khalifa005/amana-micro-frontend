import { AuthService } from '@amana-micro-frontend/auth';
import { User } from '@amana-micro-frontend/data-models';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@amana-micro-frontend/shared-environments';

@Component({
  selector: 'amana-micro-frontend-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  user$!: Observable<User>;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user$ = this.authService.user$;
    console.log("layout");
    console.log("environment.production");
    console.log(environment.apiBaseUrl);

  }
}
