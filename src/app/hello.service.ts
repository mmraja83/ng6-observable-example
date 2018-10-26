import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class helloService {

  private headers = new HttpHeaders({
    Accept: '*/*',
    Authorization: 'Bearer asdfasf'
  });

  constructor(private http: HttpClient){}

  // use an http request with observable method. 
  // so this will help you to get its response whenever it is available by using subscribe on another component.
  getData(): Observable<any[]> {
    let url = 'https://ng-observable-example.stackblitz.io/assets/users.json';
    return this.http.get( url );
  }

}