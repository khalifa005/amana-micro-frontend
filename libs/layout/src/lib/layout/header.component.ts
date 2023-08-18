/* eslint-disable @typescript-eslint/no-inferrable-types */
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'amana-micro-frontend-header',
  template: `
  <mat-toolbar color="primary" fxLayout="row">
  <button (click)="menuToggled.emit(true)" mat-icon-button>
        <mat-icon>menu</mat-icon>
      </button>

  <span>Shared lib Portal</span>
  <div class="right-nav">
    <!-- <span>
      <button mat-button [routerLink]="['/service1']" routerLinkActive="router-link-active">service 1</button>
    </span> -->

    <button mat-icon-button [matMenuTriggerFor]="menu">
        <mat-icon>person_pin</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item (click)="logout()">
          <span>Logout</span>
        </button>
      </mat-menu>

    <!-- <img
  alt="Nx logo"
  width="75"
  src="/assets/logo.png"/> -->

  </div>
</mat-toolbar>

  `,
  styles: [
    `
     .feature-header {
        background: white;
        padding: 15px 20px;
        border-bottom: 1px solid #ececec;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        box-shadow: 0 0 4px 2px #ececec;
        position: sticky;
        top: 0;
        z-index: 9999;

        margin-bottom: 20px;
      }

      .title {
        display: flex;
        align-items: center;
        gap: 15px;
        height: 30px;
      }

      .feature-header > .start {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }

      h1,
      h2,
      p {
        margin-bottom: 0;
      }

      p {
        color: #848484;
      }

      .feature-icon {
        font-size: 35px;
        width: 35px;
        height: auto;
      }

      .spacer {
        flex: 1 1 auto;
      }

      .title {
        cursor: pointer;
      }

      .welcome-text {
        font-size: smaller;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Output() menuToggled = new EventEmitter<boolean>();

  user: string = 'khalifaaaa';

  // constructor(private authService: AuthService) { }

  logout(): void {
    console.log('Logged out');
  }
}
