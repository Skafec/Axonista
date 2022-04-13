import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MockSelectedLocationApiService } from 'src/app/mocks/mock-selected-location-api.service';
import { SelectedLocationApiService } from './../../services/api/selected-location-api.service';

import { SelectedLocationComponent } from './selected-location.component';

describe('SelectedLocationComponent', () => {
  let component: SelectedLocationComponent;
  let fixture: ComponentFixture<SelectedLocationComponent>;
  let service: SelectedLocationApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectedLocationComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: SelectedLocationApiService,
          useClass: MockSelectedLocationApiService,
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedLocationComponent);
    service = TestBed.inject(SelectedLocationApiService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
