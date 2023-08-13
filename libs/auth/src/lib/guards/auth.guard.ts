import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    console.log("guard works");
    return this.authService.user$.pipe(
      map(user => {
        if (user) {
          // eslint-disable-next-line no-debugger
          // debugger;
          return true;
        } else {
          // eslint-disable-next-line no-debugger
          // debugger;
          this.router.navigate([`/auth/login`]);
          return false;
        }
      })
    );
  }
}
