import { Routes } from '@angular/router';
import { authRoutes } from 'libs/auth/src/lib/auth.module';


export const routes: Routes = [
  { path: 'auth', children: authRoutes},

  // {
  // lazy loading
  //   path: 'auth',
  //   loadChildren: () => import('./@auth/auth.module')
  //     .then(m => m.NgxAuthModule),
  // },

  // {
  //   //this will group all the component into pages component in single view with the side menu par
  //   path: 'test',
  //   component: MyComponentComponent
  // },

  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' },
];
