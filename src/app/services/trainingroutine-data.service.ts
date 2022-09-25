import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.prod';
import { TrainingRoutineData } from '../models/trainingRoutineData';

@Injectable({
  providedIn: 'root'
})
export class TrainingroutineDataService {
  baseUrl:string = environment.trainingPath;
  constructor(private http: HttpClient) { }
  getTrainingRoutineData(){
    return this.http.get<TrainingRoutineData[]>(this.baseUrl); 
  }

}
