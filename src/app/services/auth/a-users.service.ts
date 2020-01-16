import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AConfigService } from "./a-config.service";

import { Observable } from "rxjs";

interface User {
  name: string;
  img: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class AUsersService {
  update(value: any): Observable<any> {
    return this.http.put(`${this.modelUrl}?access_token=${localStorage.getItem('access_token')}`, value)

  }
  register(value: any): Observable<any> {
    return this.http.post(`${this.modelUrl}`, value);
  }
  modelUrl: string;

  constructor(private http: HttpClient, private configSvc: AConfigService) {
    this.modelUrl = this.configSvc.baseUrl + "/users";
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.modelUrl}`);
  }

  getById(id: string): Observable<any> {
    return this.http.get(`${this.modelUrl}/${id}`);
  }

}
