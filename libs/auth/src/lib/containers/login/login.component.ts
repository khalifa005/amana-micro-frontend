import { Component, OnInit, ChangeDetectionStrategy  } from '@angular/core';

@Component({
  selector: 'amana-micro-frontend-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

// Change the ChangeDetectionStrategy to OnPush
// Now that we are using the presentation and container component pattern and we know that we only need to check the child components for changes if a DOM event or a @Input or @Output passes new primitives or reference values. In this way we can tell Angular not check the whole component tree which can cause performance issues in larger applications.

export class LoginComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit() {

  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  login(authenticate:any) {
    console.log(authenticate);
    // this.authService.login(authenticate).subscribe();
  }

}
