import { LocationData } from './../../utils/util.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserLocationService } from '../user-location.service';
import * as util from '../../utils/util';
import { CurrentWeatherData } from './current-location-data.model';

@Injectable({
  providedIn: 'root',
})
export class CurrentLocationApiService {
  constructor(
    private userLocationService: UserLocationService,
    private http: HttpClient
  ) {}

  // TODO: this should have api interface typed
  currentLocationApiData$ = new Subject<CurrentWeatherData>();

  initialize() {
    this.getCurrentLocationData();
  }

  getCurrentLocationData() {
    this.userLocationService.locationData$.subscribe((res) => {
      this.getCurrentLocationApiResponse(res.latitude, res.longitude);
    });
  }

  getCurrentLocationApiResponse(lat: number, long: number) {
    return this.http
      .get(util.generateCurrentWeatherApiUrl(lat, long))
      .subscribe((res: any) => {
        this.currentLocationApiData$.next(res);
      });
  }
}
