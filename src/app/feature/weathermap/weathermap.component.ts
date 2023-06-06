import { Component, OnInit } from '@angular/core';
import { OpenWeatherMapService } from 'src/app/core/services/open-weather-map/open-weather-map.service';
import { WeatherData } from 'src/app/shared/types/weatherData.type';

@Component({
  selector: 'app-weathermap',
  templateUrl: './weathermap.component.html',
  styleUrls: ['./weathermap.component.scss']
})
export class WeathermapComponent implements OnInit {


  currentWeather: WeatherData |undefined;

  center: google.maps.LatLngLiteral = { lat: 0, lng: 0 };
  markerOptions: google.maps.MarkerOptions = {};
  markerPosition: google.maps.LatLngLiteral = { lat: 0, lng: 0 };

  constructor(private readonly owms: OpenWeatherMapService){}

  ngOnInit(): void {
    this.getUserLocation();
  }

  private getUserLocation(): void{

    if(navigator.geolocation){

      navigator.geolocation.getCurrentPosition(
        (position) =>{
          this.placePin(position.coords.latitude,position.coords.longitude);
          this.centerMap(position.coords.latitude, position.coords.longitude);
          this.fetchWeatherData(position.coords.latitude,position.coords.longitude);
        },
        (error)=>{
          console.log(error);
        }
      )
    }else{
      console.log("Geolocation is not supported");
    }
  }

  private fetchWeatherData(lat:number, lon:number):void{
    this.owms.getWeatherData({lat,lon}).subscribe((weather)=>{
      this.currentWeather = weather;
      console.log(weather);
    });
  }


  onMapClick(event: any) {
    this.placePin(event.latLng.lat(),event.latLng.lng());
    this.fetchWeatherData(event.latLng.lat(),event.latLng.lng());
  }

  private placePin(lat:number,lon:number){
    this.markerPosition = {
      lat: lat,
      lng: lon,
    };
    this.markerOptions = {
      position: this.markerPosition,
    };
  }

  private centerMap(lat:number, lng:number){
    this.center = {lat,lng}
  }

}
