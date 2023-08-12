import { AuthModule, authRoutes } from './../../../../libs/auth/src/lib/auth.module';
import { CommonUiModule } from './../../../../libs/common-ui/src/lib/common-ui.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { routes } from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';   

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonUiModule,
    AuthModule,
    // RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    // RouterModule.forRoot([{path: 'auth', children: authRoutes}], { initialNavigation: 'enabledBlocking' }),
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
