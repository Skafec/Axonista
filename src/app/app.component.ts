import { LocationData } from './utils/util.model';
import { Component, OnInit } from '@angular/core';
import { UserLocationService } from './services/user-location.service';
import { CurrentLocationApiService } from './services/api/current-location-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userCurrentLocationData: LocationData;

  constructor(private userLocationService: UserLocationService) {}

  ngOnInit(): void {
    this.userLocationService.getLocation();
  }
}
