import { Component, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map, Subscription, timer, catchError, ObservableInput } from 'rxjs';
import { SelectedLocationApiService } from 'src/app/services/api/selected-location-api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-selected-location',
  templateUrl: './selected-location.component.html',
  styleUrls: ['./selected-location.component.scss'],
})
export class SelectedLocationComponent implements OnDestroy {
  timerSubscription: Subscription;

  selectedLocationForm = this.formBuilder.group({
    city: ' ',
  });

  constructor(
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    public readonly selectedLocationApiService: SelectedLocationApiService
  ) {}

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  onSubmit() {
    this.spinner.show('selected-spinner');
    // timer(0, 10000) call the function immediately and every 10 seconds
    this.timerSubscription = timer(0, 10000)
      .pipe(
        map(() => {
          this.sendApiRequest();
        })
      )
      .subscribe();
  }

  sendApiRequest(): void {
    this.selectedLocationApiService.getSelectedLocationDataFromApi(
      this.selectedLocationForm.value.city
    );
  }
}
