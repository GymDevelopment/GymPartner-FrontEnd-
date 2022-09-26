import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { MealData } from '../models/mealData';

@Injectable({
  providedIn: 'root'
})
export class MealDataService {
  baseURL: string = environment.mealPath;
  constructor(private http: HttpClient) { }
  getMealData(){
    return this.http.get<MealData[]>(this.baseURL);
  }
  deleteMeal(id:number){
    return this.http.delete<MealData>(`${this.baseURL}/${id}`);
  }
  addMeal(meal: MealData) {
    return this.http.post<MealData>(this.baseURL, meal);
  }
}
