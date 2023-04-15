import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-forcast',
  templateUrl: './forcast.component.html',
  styleUrls: ['./forcast.component.scss']
})
export class ForcastComponent {
  title='Click Below For Weather Details'
  city:any;
  weather_Details: any;
  temp_min: any;
  temp: any;
  temp_max: any;
  pressure: any;
  humidity: any;
  windspeed: any;
  country: any;
  UVindex: any;
  ShowWeather:boolean=false;
 
  constructor(private dataservice:DataService){

  }
  




  async weatherDetails(){
     console.log(this.city);
   this.weather_Details= await this.dataservice.getWeatherData(this.city).toPromise()
     console.log('weatherData',this.weather_Details);
     this.city=this.weather_Details.name.city
     this.temp=this.weather_Details.main.temp;
     this.temp_min=this.weather_Details.main.temp_min;
     this.temp_max=this.weather_Details.main.temp_max;
     this.pressure=this.weather_Details.main.pressure;
     this.humidity=this.weather_Details.main.humidity;
     this.windspeed=this.weather_Details.wind.speed;
     this.country=this.weather_Details.sys.country;
     
    this.ShowWeather=true;
  }
  // weatherDetails(){
  //   this.ShowWeather=true;
  // }
}
