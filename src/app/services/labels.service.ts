import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Labels } from '../interfaces/labels';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LabelsService {

  constructor(private http : HttpClient) { }

  private baseURL = "http://localhost:8082/api/v1/labels"

  getLabels():Observable<Labels[]>{
    return this.http.get<Labels[]>(`${this.baseURL}`);

  }

  createLabels(Labels:Labels): Observable<Object>{
    return this.http.post(`${this.baseURL}/savelabel`,Labels);
  }

  getLabelsById(id:number):Observable<Labels>{
    return this.http.get<Labels>(`${this.baseURL}/${id}`)
  }

  updateLabels(id:number, Labels:Labels){
    return this.http.put(`${this.baseURL}/${id}`,Labels);
  }

  deleteLabels(id:number):Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
}
}
