import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {

  baseUrl = 'http://127.0.0.1:5000/';

  constructor(private http: HttpClient) { }

  getForecast(lat, long): Observable<any> {
    return this.http.get(`${this.baseUrl}forecast/${lat}/${long}`);
  }

}
