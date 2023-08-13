import { Routes } from '@angular/router';
import { authRoutes } from 'libs/auth/src/lib/auth.module';
import { AuthGuard } from 'libs/auth/src/lib/guards/auth.guard';


export const routes: Routes = [
  { path: 'auth', children: authRoutes},

  {
    path: 'products',
    loadChildren: () =>
      import('../../../../libs/products/src/lib/products.module')
      .then( (mod) => mod.ProductsModule ),
      canActivate: [AuthGuard],
    },

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

  // { path: '', pathMatch: 'full', redirectTo: 'products' }, // added
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' },
];
