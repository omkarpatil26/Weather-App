import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class WeatherApi{
    
    constructor(private http:HttpClient){}

getBaseUrl(URL:string){
    const newBaseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
    //lat=19.1462&lon=77.1462&appid=**************
    //console.log(newBaseUrl);
    return (newBaseUrl);
}
getBaseUrll(URL:string){
    return this.http.get(URL);
}
}