import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SelectedLocationApiService } from './selected-location-api.service';

describe('SelectedLocationApiService', () => {
  let service: SelectedLocationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(SelectedLocationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
