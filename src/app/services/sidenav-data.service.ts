import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NavbarData } from '../models/navbarData';

@Injectable({
  providedIn: 'root'
})
export class SidenavDataService {
  baseUrl:string = environment.navbarPath;

  constructor(private http:HttpClient) { }
  getNavbarData(){
    //console.log(this.http.get<NavbarData>(this.baseUrl));
    return this.http.get<NavbarData[]>(this.baseUrl);
  }
}
