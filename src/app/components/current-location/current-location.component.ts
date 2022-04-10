import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subscription, timer } from 'rxjs';
import { CurrentLocationApiService } from 'src/app/services/api/current-location-api.service';

@Component({
  selector: 'app-current-location',
  templateUrl: './current-location.component.html',
  styleUrls: ['./current-location.component.scss'],
})
export class CurrentLocationComponent implements OnInit, OnDestroy {
  timerSubscription: Subscription;

  constructor(
    public readonly currentLocationApiService: CurrentLocationApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // timer(0, 10000) call the function immediately and every 10 seconds
    this.timerSubscription = timer(0, 10000)
      .pipe(
        map(() => {
          this.currentLocationApiService.initialize();
          this.cdr.detectChanges();
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }
}
