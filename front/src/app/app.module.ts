import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ShowWeatherComponent } from './show-weather/show-weather.component';

import { AppRoutes } from './app.routes';
import { WeatherService } from './services/weather.service';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ShowWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
