import { Component, OnInit } from '@angular/core';
import { OpenWeatherMapService } from 'src/app/core/services/open-weather-map/open-weather-map.service';
import { Coords } from 'src/app/shared/types/coords.type';

@Component({
  selector: 'app-weathermap',
  templateUrl: './weathermap.component.html',
  styleUrls: ['./weathermap.component.scss']
})
export class WeathermapComponent implements OnInit {


  userLocation: Coords = {latitude:0,longitude:0};

  constructor(private readonly owms: OpenWeatherMapService){}

  ngOnInit(): void {
    this.getUserLocation();
  }

  private getUserLocation(): void{

    if(navigator.geolocation){

      navigator.geolocation.getCurrentPosition(
        (position) =>{
          this.userLocation.latitude = position.coords.latitude;
          this.userLocation.longitude = position.coords.longitude;
          this.fetchWeatherData();
        },
        (error)=>{
          console.log(error);
        }
      )
    }else{
      console.log("Geolocation is not supported");
    }
  }

  private fetchWeatherData():void{
    this.owms.getWeatherData(this.userLocation);
  }

}
