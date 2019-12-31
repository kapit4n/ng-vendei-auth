import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AConfigService } from "./a-config.service";

import { Observable } from "rxjs";

interface LoginResult {
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class ALoginService {
  modelUrl: string;

  constructor(private http: HttpClient, private configSvc: AConfigService) {
    this.modelUrl = this.configSvc.baseUrl + "/users";
  }

  login(credentials): Observable<any> {
    return this.http.post(`${this.modelUrl}/login`, credentials);
  }

}
