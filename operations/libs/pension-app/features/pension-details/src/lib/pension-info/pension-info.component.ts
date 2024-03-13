import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { UserStore } from '@operations/pension-data-access';

@Component({
     selector: 'operations-pension-info',
     standalone: true,
     imports: [CommonModule],
     templateUrl: './pension-info.component.html',
     styleUrl: './pension-info.component.scss',
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PensionInfoComponent {
     userStore = inject(UserStore);
     signout() {
          this.userStore.signout();
     }
}
