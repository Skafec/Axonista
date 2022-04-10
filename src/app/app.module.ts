import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrentLocationComponent } from './components/current-location/current-location.component';
import { SelectedLocationComponent } from './components/selected-location/selected-location.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentLocationComponent,
    SelectedLocationComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
