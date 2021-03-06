import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private URL = 'http://localhost:3000/api'
  constructor(
    private http: HttpClient
  ) { }

  getData(){
    return this.http.get<any>(this.URL + '/dashboard')
  }
  clientDataDetail(ID:String){
    return this.http.get<any>(`${this.URL}/client/${ID}`)
  }
  clientClusterKmeans(ID:String){
    return this.http.get<any>(`${this.URL}/clientKmeans/${ID}`)
  }

}
