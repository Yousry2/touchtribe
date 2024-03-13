import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PensionAuthComponent } from './pension-auth.component';

describe('PensionAuthComponent', () => {
     let component: PensionAuthComponent;
     let fixture: ComponentFixture<PensionAuthComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               imports: [PensionAuthComponent],
          }).compileComponents();

          fixture = TestBed.createComponent(PensionAuthComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
});
