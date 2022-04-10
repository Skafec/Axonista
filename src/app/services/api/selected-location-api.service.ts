import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Subscription } from 'rxjs';
import { CurrentWeatherData } from './current-location-data.model';
import * as util from '../../utils/util';

@Injectable({
  providedIn: 'root',
})
export class SelectedLocationApiService implements OnDestroy {
  constructor(private http: HttpClient) {}

  selectedLocationApiData$ = new Subject<CurrentWeatherData>();

  private subscriptions = new Subscription();

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getSelectedLocationDataFromApi(location: string): void {
    this.subscriptions.add(
      this.http
        .get(util.generateCurrentWeatherForSelectedApiUrl(location))
        .subscribe((res: any) => {
          this.selectedLocationApiData$.next(res);
        })
    );
  }
}
