import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { IWeatherService } from './weather.service';
import { ICurrentWeather } from '../interfaces';


export class WeatherServiceFake implements IWeatherService {
  private fakeWeather : ICurrentWeather = {
    city:'Kolhapur',
    country:'India',
    date: 1485789600,
    image:'assets/img/rainy.jpg',
    temperature: 27,
    description:'Raining'
  }
  public getCurrentWeather(city:string, country:string) : Observable<ICurrentWeather> {
      return of(this.fakeWeather);
    }
}
