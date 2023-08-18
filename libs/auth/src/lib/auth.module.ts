import { MaterialModule } from '@amana-micro-frontend/material';
import { CommonUiModule } from '@amana-micro-frontend/common-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptor/auth.interceptor.service';

export const authRoutes: Route[] = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent }
];

const COMPONENTS = [
  LoginComponent,
  LoginFormComponent];

  @NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    CommonUiModule,
    MaterialModule,
    ReactiveFormsModule
  ],

  declarations: [
    COMPONENTS
  ],
  exports: [
    COMPONENTS
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AuthModule {}
