import { Injectable, computed, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserStore } from '@operations/pension-data-access';

@Injectable({
     providedIn: 'root',
})
export class UserAuthService {
     canActivate: CanActivateFn = () => {
          const userStore = inject(UserStore);
          const router = inject(Router);
          const loggedIn = computed<boolean>(() => {
               const result = userStore.userInfo() !== null;
               return result;
          });

          if (loggedIn()) {
               console.log('can activate true');
               return true;
          } else {
               console.log('can activate false');
               return router.navigateByUrl('auth');
          }
     };
}
