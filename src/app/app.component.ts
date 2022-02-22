import { Component, OnInit, ViewChild, ElementRef, NgZone, Output, Input } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit {
  title = 'angular-google-map';
  latitude!: number;
  longitude!: number;
  
  lat:any;
  lon:any;
  weather:any;
  zoom: number | any;
  selectedLocation : Location | undefined;
  
  public searchElementRef!: ElementRef;
  
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private weatherservices:WeatherService
  ) { }

  ngOnInit() {
    //load Places Autocomplete
    this.latitude=19.108;
    this.longitude=77.307;
    this.zoom=1;
    this.mapsAPILoader.load().then(() => {
    });
    // this.getLocation();
  }

  onMapClicked(event: any){
    // console.table(event.coords);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    
    // console.log(this.latitude,this.longitude);
  }
}