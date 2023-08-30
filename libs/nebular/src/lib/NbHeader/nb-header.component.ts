/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbLayoutDirection, NbLayoutDirectionService, NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
import { Router } from '@angular/router';


@Component({
  selector: 'amana-micro-frontend-nb-header',
  templateUrl: './nb-header.component.html',
  styleUrls: ['./nb-header.component.css'],
})
export class NbHeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  userFullName : string = "";
  @Input() isAuthenticated : true;
  currentRole = -1;


  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  supportedLanguages!: string[];
  directions = NbLayoutDirection;
  currentDirection: NbLayoutDirection;
  currentTheme = 'default';
  defaultLang: any;
  userPicture : string = "assets/images/logo.png";


  userMenu = [ { title: 'Profile', link: '/pages/user-profile'   }, { title: 'Log out', link: '/auth/logout'  } ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private router: Router,
              private themeService: NbThemeService,
              private directionService: NbLayoutDirectionService,
              private breakpointService: NbMediaBreakpointsService,
              private permissionsService: NgxPermissionsService) {

    this.directionService.onDirectionChange()
    .pipe(takeUntil(this.destroy$))
    .subscribe(newDirection => this.currentDirection = newDirection);

  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;



    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  toggleDirection(newDirection: NbLayoutDirection) {
    this.directionService.setDirection(newDirection);

  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    // this.layoutService.changeLayoutSize();

    return false;
  }

  onDirectionSwitch() : void{
    location.reload();
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
