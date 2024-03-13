import { inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserStore } from '@operations/pension-data-access';

export const isLoggedIn = (userStore = inject(UserStore), router = inject(Router)) =>
     userStore.userInfo() ? true : router.navigateByUrl('auth');

export const appRoutes: Route[] = [
     {
          path: '',
          pathMatch: 'full',
          redirectTo: 'pension-details',
     },

     {
          path: 'auth',
          loadChildren: () => import('@operations/pension-auth').then((m) => m.pensionAuthRoutes),
     },
     {
          path: 'pension-details',
          loadChildren: () => import('@operations/pension-details').then((m) => m.pensionDetailsRoutes),
          canActivate: [() => isLoggedIn()],
     },
];
