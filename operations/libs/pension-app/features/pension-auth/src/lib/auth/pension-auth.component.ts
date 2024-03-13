import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { APP_BASE_HREF, CommonModule, PlatformLocation } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PensionAuthApiService, UserStore } from '@operations/pension-data-access';
import { getBaseHref } from '@operations/util-common';
import { Inject } from '@angular/core';

@Component({
     selector: 'operations-pension-auth',
     standalone: true,
     imports: [CommonModule, RouterModule, NgOptimizedImage, HttpClientModule],
     providers: [
          PensionAuthApiService,
          {
               provide: APP_BASE_HREF,
               useFactory: getBaseHref,
               deps: [PlatformLocation],
          },
     ],
     templateUrl: './pension-auth.component.html',
     styleUrls: ['./pension-auth.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PensionAuthComponent {
     userStore = inject(UserStore);
     router = inject(Router);
     constructor(@Inject(APP_BASE_HREF) public baseHref: string) {
          effect(() => {
               if (this.userStore.userInfo()) {
                    this.router.navigateByUrl('/');
               }
          });
     }
}
