import { Route } from '@angular/router';
import { PensionDetailsComponent } from './pension-details/pension-details.component';
import { PensionInfoComponent } from './pension-info/pension-info.component';

export const pensionDetailsRoutes: Route[] = [
     {
          path: '',
          pathMatch: 'full',
          redirectTo: 'details',
     },

     {
          path: 'details',
          component: PensionDetailsComponent,
          children: [
               { path: '', redirectTo: 'info', pathMatch: 'full' },
               {
                    path: 'info',
                    component: PensionInfoComponent,
               },
          ],
     },
];
