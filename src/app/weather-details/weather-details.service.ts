import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class WeatherDetailsService {

  private apiKey = "3d8b309701a13f65b660fa2c64cdc517";

  constructor(private httpClient: HttpClient) { }

  getCityById(id: any): Observable<any> {
    const apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=' + id + '&appid=' + this.apiKey;
    return this.httpClient.get(apiUrl).pipe(map((res: any) => {
      return res;
    }));
  }
}
