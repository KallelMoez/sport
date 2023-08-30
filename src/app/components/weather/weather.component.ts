import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WeatherService } from "src/app/services/weather.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"],
})
export class WeatherComponent implements OnInit {
  searchWeatherForm: FormGroup;
  result: any;
  imgUrl:string; 
  constructor(private fb: FormBuilder, private wService: WeatherService) {}

  ngOnInit() {
    this.searchWeatherForm = this.fb.group({
      cityInput: ["", [Validators.required, Validators.minLength(3)]],
    });
  }

  getWeather() {
    this.wService.weatherReq(this.searchWeatherForm.value).subscribe((data) => {
      console.log(data.result);
      this.result = data.result;
      this.imgUrl = `https://openweathermap.org/img/wn/${this.result.icon}@2x.png`
    });
  }
}
