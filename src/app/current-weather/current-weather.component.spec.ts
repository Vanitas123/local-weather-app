import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherService } from '../weather/weather.service';
import { WeatherServiceFake } from 'src/app/weather/weather.service.fake';
import { CurrentWeatherComponent } from './current-weather.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';




describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide:WeatherService, useClass:WeatherServiceFake}
      ],
      declarations: [ CurrentWeatherComponent ],
      imports: [HttpClientTestingModule]

    })
    .compileComponents();
  }));



  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
