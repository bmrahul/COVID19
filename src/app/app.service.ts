import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  testConnectivity(): Observable<any> {
    return this.http.get('http://jyothisuragani.pythonanywhere.com/helloworld').pipe();
  }

  totalConfirmed(): Observable<any> {
    return this.http.get('http://jyothisuragani.pythonanywhere.com/confirmed_cases_by_country').pipe();
  }

  totalDeaths(): Observable<any> {
    return this.http.get('http://jyothisuragani.pythonanywhere.com/deaths_by_country').pipe();
  }

  totalRecovered(): Observable<any> {
    return this.http.get('http://jyothisuragani.pythonanywhere.com/recovered_by_country').pipe();
  }
}
