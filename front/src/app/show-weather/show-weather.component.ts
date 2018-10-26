import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.css'],
})
export class ShowWeatherComponent implements OnInit {

  public lat: any;
  public long: any;
  public forecasts: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    const latlong = localStorage.getItem('latlong');
    this.lat = latlong.split('/')[0];
    this.long = latlong.split('/')[1];
    this.getForecast();
  }

  getForecast() {
    this.weatherService.getForecast(this.lat, this.long).subscribe(({forecasts}) => {
      this.forecasts = forecasts;
      console.log(this.forecasts);
    }, err => {
      console.log(err);
    });
  }

}
