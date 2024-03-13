import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PensionAuthApiService } from './auth-api.service';

describe('KkkkkkService', () => {
     let service: PensionAuthApiService;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               imports: [HttpClientTestingModule],
          }).compileComponents();
          TestBed.configureTestingModule({});
          service = TestBed.inject(PensionAuthApiService);
     });

     it('should be created', () => {
          expect(service).toBeTruthy();
     });
});
