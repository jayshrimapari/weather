import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  Weatherurl: string="https://api.openweathermap.org/data/2.5/weather?q=";
  
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  constructor(private httpclient:HttpClient) { }
  getWeatherData(city:any){
    let key ='f2376252fd4b3d4271472a0ba3253709';
    let appId='&appid=';
    let tempUnit="&units=metric";
    // let language='&lang=hi';
    let WeatherUrl=this.Weatherurl + city + appId + key + tempUnit;
    console.log('WeatherUrl--->',WeatherUrl);
    
     return this.httpclient.get(WeatherUrl)
  }
 
}

