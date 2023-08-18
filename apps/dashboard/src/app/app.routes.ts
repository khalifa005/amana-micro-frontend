import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'service2',
    loadChildren: () =>
      import('service2/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'service1',
    loadChildren: () =>
      import('service1/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
