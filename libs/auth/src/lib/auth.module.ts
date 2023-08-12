import { MaterialModule } from './../../../material/src/lib/material.module';
import { CommonUiModule } from './../../../common-ui/src/lib/common-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

export const authRoutes: Route[] = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent }
];

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
    LoginComponent,
    LoginFormComponent
  ],
  exports: [
    LoginComponent
  ],
})
export class AuthModule {}
