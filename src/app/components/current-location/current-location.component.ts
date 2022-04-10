import { Component, OnInit } from '@angular/core';
import { CurrentLocationApiService } from 'src/app/services/api/current-location-api.service';

@Component({
  selector: 'app-current-location',
  templateUrl: './current-location.component.html',
  styleUrls: ['./current-location.component.scss'],
})
export class CurrentLocationComponent implements OnInit {
  constructor(
    public readonly currentLocationApiService: CurrentLocationApiService
  ) {}

  ngOnInit(): void {
    this.currentLocationApiService.initialize();

    this.currentLocationApiService.currentLocationApiData$.subscribe((res) => {
      console.log(res);
    });
  }
}
