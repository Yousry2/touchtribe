import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PensionInfoComponent } from './pension-info.component';

describe('PensionInfoComponent', () => {
     let component: PensionInfoComponent;
     let fixture: ComponentFixture<PensionInfoComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               imports: [PensionInfoComponent],
          }).compileComponents();

          fixture = TestBed.createComponent(PensionInfoComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
});
