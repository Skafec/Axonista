import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MockSelectedLocationApiService } from './../../mocks/mock-selected-location-api.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentLocationApiService } from './../../services/api/current-location-api.service';

import { CurrentLocationComponent } from './current-location.component';

describe('CurrentLocationComponent', () => {
  let component: CurrentLocationComponent;
  let fixture: ComponentFixture<CurrentLocationComponent>;
  let service: CurrentLocationApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentLocationComponent],
      providers: [
        {
          provide: CurrentLocationApiService,
          useClass: MockSelectedLocationApiService,
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentLocationComponent);
    service = TestBed.inject(CurrentLocationApiService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
