import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { WeatherDetailsService } from './weather-details.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css'],
  providers: [WeatherDetailsService]
})
export class WeatherDetailsComponent implements OnInit {
  cityData: any;
  subscription: any;
  cityName: any;

  constructor(private router: Router, private route: ActivatedRoute, private weatherDetailsService: WeatherDetailsService) {

    this.subscription = this.route.params.subscribe(params => {
      this.weatherDetailsService.getCityById(params['id']).subscribe((res) => {
        this.cityName = res.city.name;
        // const filteredData = res.list.filter((val: any) => {
        //   return moment.unix(val.dt).utc().format("hh:mm a") === "09:00 am";
        // });
        // const filteredData = res.list.map((val: any) => {
        //   return moment.unix(val.dt).utc();
        // });
        this.cityData = res.list;
      });;
    });
  }

  ngOnInit(): void {
  }

  formatDate(val: any) {
    return moment.unix(val).format("MMMM Do YYYY, h:mm a");
  }

  goToList() {
    this.router.navigate(['/home']);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
