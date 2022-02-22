import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { WeatherApi } from '../weather.api';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  componentName = "weather"; 
  data:any;
  @Input() newLat : any;
  @Input() newLon : any;

  WeatherData:any;
  WeatherApi :any;
  finalUrl:any;
  newLatitude: any;
  constructor( private weatherservices:WeatherService, private weatherapi:WeatherApi ) { }

  ngOnInit(): void {
    this.WeatherData={
      main:{},
    }
  }

  ngOnChanges(){
    //this.getWeatherData();
    this.getApiData();
  }

  getWeatherData(){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.newLat || 19.1462}&lon=${this.newLon || 77.1462}&appid=****`)
  .then(response=>response.json())
  .then(data=>{this.setWeatherData(data);})

    //adding data manually
    // let data = JSON.parse('{"coord":{"lon":139,"lat":35},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":280.26,"feels_like":280.26,"temp_min":277.26,"temp_max":281.8,"pressure":1018,"humidity":91},"visibility":10000,"wind":{"speed":1.14,"deg":131,"gust":2.5},"clouds":{"all":92},"dt":1639460651,"sys":{"type":2,"id":2019346,"country":"JP","sunrise":1639431831,"sunset":1639467202},"timezone":32400,"id":1851632,"name":"Shuzenji","cod":200}')
    // this.setWeatherData(data);  
  }

  modifyApi(){
    this.finalUrl = this.weatherapi.getBaseUrl("");
  }

  getApiData(){
    this.finalUrl = this.weatherapi.getBaseUrl('')+`lat=${this.newLat || 19.1462}&lon=${this.newLon || 77.1462}&appid=0524e93764493db4b7dccb835a9fa808`;
    this.weatherapi.getBaseUrll(this.finalUrl).subscribe((data:any)=>
    {
      this.data=data;
      //console.log(data);
      this.setWeatherData(data);
    });
  }

  setWeatherData(data:any){
    this.WeatherData=data;
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }
}