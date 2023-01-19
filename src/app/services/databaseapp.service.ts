import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DatabaseappService {

  constructor(
    public http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': '*',
      // 'Access-Control-Allow-Headers': '*',
      'x-api-key': environment.apiCats.key
    })
  }

  getCats() {
   return this.http.get(environment.apiCats.api);
  }

}
