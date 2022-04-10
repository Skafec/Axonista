import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map, Subscription, timer } from 'rxjs';
import { SelectedLocationApiService } from 'src/app/services/api/selected-location-api.service';

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
    public readonly selectedLocationApiService: SelectedLocationApiService
  ) {}

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }

  onSubmit() {
    // TODO: Could be a util
    this.timerSubscription = timer(0, 10000)
      .pipe(
        map(() => {
          console.log('called');
          this.sendApiRequest();
          this.cdr.detectChanges();
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
