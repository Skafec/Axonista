import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CurrentLocationApiService } from './current-location-api.service';

describe('CurrentLocationApiService', () => {
  let service: CurrentLocationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(CurrentLocationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
