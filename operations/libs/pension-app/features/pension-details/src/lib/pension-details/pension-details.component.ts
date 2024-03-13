import { CommonModule, NgOptimizedImage, APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { Component, Inject, effect, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { getBaseHref } from '@operations/util-common';
import { UserStore } from '../../../../../pension-data-access/src';

@Component({
     selector: 'operations-pension-details',
     standalone: true,
     providers: [
          {
               provide: APP_BASE_HREF,
               useFactory: getBaseHref,
               deps: [PlatformLocation],
          },
     ],
     imports: [CommonModule, RouterModule, CommonModule, NgOptimizedImage],
     templateUrl: './pension-details.component.html',
     styleUrl: './pension-details.component.sass',
})
export class PensionDetailsComponent {
     userStore = inject(UserStore);
     router = inject(Router);
     constructor(@Inject(APP_BASE_HREF) public baseHref: string) {
          effect(() => {
               const userInfo = this.userStore.userInfo();
               console.log('userInfo', userInfo);
               if (!userInfo) {
                    console.log('userInfo', userInfo);
                    this.router.navigateByUrl('/auth');
               }
          });
     }
}
