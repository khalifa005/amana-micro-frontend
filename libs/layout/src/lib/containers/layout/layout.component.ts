import { AuthService } from '@amana-micro-frontend/auth';
import { User } from '@amana-micro-frontend/data-models';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@amana-micro-frontend/shared-environments';
import { Menu } from '../../layout/menu.model';

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

  opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }

  menu: Menu = [
    {
      title: 'Home',
      icon: 'home',
      link: '/',
      color: '#ff7f0e',
    },
    {
      title: 'Services',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Service 1',
          icon: 'money',
          link: '/service1',
          color: '#ff7f0e',
        },
        {
          title: 'Service 2',
          icon: 'people',
          color: '#ff7f0e',
          link: '/service2',
        },
      ],
    },
  ];
}
