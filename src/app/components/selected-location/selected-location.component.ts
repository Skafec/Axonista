import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-location',
  templateUrl: './selected-location.component.html',
  styleUrls: ['./selected-location.component.scss'],
})
export class SelectedLocationComponent implements OnInit {
  contries: any;

  constructor() {}

  ngOnInit(): void {}

  /* getCountries(): void {
    this.contries = location.filter((data) => {
      return data.country;
    });
  } */
}
