import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.prod';
import { HomeCardData } from '../models/homeCardData';

@Injectable({
  providedIn: 'root'
})
export class HomecardDataService {
  baseURL: string = environment.homecardPath;
  constructor(private http: HttpClient) { }
  gethomeCardData(){
    return this.http.get<HomeCardData[]>(this.baseURL);
  }
}
