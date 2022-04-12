import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Subscription } from 'rxjs';
import { CurrentWeatherData } from './current-location-data.model';
import { NgxSpinnerService } from 'ngx-spinner';
import * as util from '../../utils/util';

@Injectable({
  providedIn: 'root',
})
export class SelectedLocationApiService implements OnDestroy {
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}

  selectedLocationApiData$ = new Subject<CurrentWeatherData>();

  private subscriptions = new Subscription();

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getSelectedLocationDataFromApi(location: string): void {
    this.subscriptions.add(
      this.http
        .get(util.generateCurrentWeatherForSelectedApiUrl(location))
        .subscribe({
          next: (v) => {
            this.selectedLocationApiData$.next(v as CurrentWeatherData);
          },
          error: (e) => {
            if (e.error && e.error.cod === '404') {
              console.clear();
              this.spinner.hide('selected-spinner');
              alert('Please type the correct city name');
            }
          },
        })
    );
  }
}
