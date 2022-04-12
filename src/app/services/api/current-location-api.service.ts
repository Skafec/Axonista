import { HttpClient } from '@angular/common/http';
import { Subject, Subscription } from 'rxjs';
import { ChangeDetectorRef, Injectable, OnDestroy } from '@angular/core';
import { UserLocationService } from '../user-location.service';
import { CurrentWeatherData } from './current-location-data.model';
import * as util from '../../utils/util';

@Injectable({
  providedIn: 'root',
})
export class CurrentLocationApiService implements OnDestroy {
  constructor(
    private userLocationService: UserLocationService,
    private http: HttpClient
  ) {}

  currentLocationApiData$ = new Subject<CurrentWeatherData>();

  private subscriptions = new Subscription();

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  initialize() {
    this.getCurrentLocationData();
  }

  getCurrentLocationData(): void {
    this.subscriptions.add(
      this.userLocationService.locationData$.subscribe((res) => {
        this.getCurrentLocationApiResponse(res.latitude, res.longitude);
      })
    );
  }

  getCurrentLocationApiResponse(lat: number, long: number): void {
    setTimeout(() => {
      this.subscriptions.add(
        this.http.get(util.generateCurrentWeatherApiUrl(lat, long)).subscribe({
          next: (v) => {
            this.currentLocationApiData$.next(v as CurrentWeatherData);
          },
          error: (e) => {
            if (e.error && e.error.cod === '404') {
              console.clear();
              alert('Getting current location failed');
            }
          },
        })
      );
    }, 2000);
  }
}
