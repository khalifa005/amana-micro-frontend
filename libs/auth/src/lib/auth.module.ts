import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

export const authRoutes: Route[] = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LoginComponent, LoginFormComponent],
  exports: [LoginComponent],
})
export class AuthModule {}
