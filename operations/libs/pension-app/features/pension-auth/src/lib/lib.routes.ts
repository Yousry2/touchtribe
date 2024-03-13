import { Route } from '@angular/router';
import { PensionAuthComponent } from './auth/pension-auth.component';
import { PensionSignupComponent } from './signup/pension-signup.component';

export const pensionAuthRoutes: Route[] = [
     {
          path: '',
          component: PensionAuthComponent,
          children: [
               { path: '', pathMatch: 'full', redirectTo: 'signup' },
               { path: 'signup', component: PensionSignupComponent },
          ],
     },
];
