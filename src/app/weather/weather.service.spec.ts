import { TestBed, inject } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import { WeatherServiceFake } from 'src/app/weather/weather.service.fake';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';


describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide:WeatherService, useClass:WeatherServiceFake}]
    });
  });

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));
});
