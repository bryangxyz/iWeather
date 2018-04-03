import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherProvider {
  apiKey = 'a11743754e146541';
  url;
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = `http://api.wunderground.com/api/${this.apiKey}/conditions/q`;
  }

  getWeather(city, state) {
    return this.http.get(this.url + '/' + state + '/' + city + '.json');
  }

}
