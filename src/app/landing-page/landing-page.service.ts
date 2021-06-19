import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from "rxjs";

@Injectable()
export class LandingPageService {

  private apiKey = "3d8b309701a13f65b660fa2c64cdc517";
  private subject = new Subject<any>();

  constructor(private httpClient: HttpClient) { }

  /** GET Relevant data for the cities */
  getCitiesData() {
    this.httpClient.get('http://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=5&appid=' + this.apiKey).subscribe(results => {
      this.subject.next(results); // Send API response to its subscribers
    });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
