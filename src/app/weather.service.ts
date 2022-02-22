import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '******'
  apiUrl = 'https://api.openweathermap.org/data/2.5'
 
 constructor(private http:HttpClient){ }

}
