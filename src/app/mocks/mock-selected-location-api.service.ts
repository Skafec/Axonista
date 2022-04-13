import { Subject } from 'rxjs';

export class MockSelectedLocationApiService {
  selectedLocationApiData$ = new Subject<null>();

  public getSelectedLocationDataFromApi(): void {
    //
  }
}
