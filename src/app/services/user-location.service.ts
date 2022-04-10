import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LocationData } from '../utils/util.model';

@Injectable({
  providedIn: 'root',
})
export class UserLocationService {
  constructor() {}

  locationData$ = new Subject<LocationData>();

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.locationData$.next({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      alert('This site needs your location in order to work');
    }
  }
}
