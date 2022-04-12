import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map, Subscription, timer } from 'rxjs';
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
    city: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef,
    private spinner: NgxSpinnerService,
    public readonly selectedLocationApiService: SelectedLocationApiService
  ) {}

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }

  onSubmit() {
    this.spinner.show('selected-spinner');
    this.timerSubscription = timer(0, 10000)
      .pipe(
        map(() => {
          this.sendApiRequest();
          this.cdr.detectChanges();
        })
      )
      .subscribe();
  }

  // TODO: Add error handling and hide spinner on error

  sendApiRequest(): void {
    this.selectedLocationApiService.getSelectedLocationDataFromApi(
      this.selectedLocationForm.value.city
    );
  }
}
