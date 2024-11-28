import { Injectable } from '@angular/core';
import { SoftwareSolution } from '../interfaces/software-solution';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoftwareSoluServiceService {

  constructor(private http : HttpClient) { }

  private baseURL = "http://localhost:8085/api/v1/softwaresolu"

  getSoftwareSolutions():Observable<SoftwareSolution[]>{
    return this.http.get<SoftwareSolution[]>(`${this.baseURL}`);

  }

  

  createSoftwareSolution(SoftwareSolution:SoftwareSolution): Observable<Object>{
    return this.http.post(`${this.baseURL}/savesolution`,SoftwareSolution);
  }

  getSoftwareSolutionById(id:number):Observable<SoftwareSolution>{
    return this.http.get<SoftwareSolution>(`${this.baseURL}/${id}`)
  }

  updateSoftwareSolution(id:number, SoftwareSolution:SoftwareSolution){
    return this.http.put(`${this.baseURL}/${id}`,SoftwareSolution);
  }

  deleteSoftwareSolution(id:number):Observable<any>{
    return this.http.delete<any>(`${this.baseURL}/${id}`);
}
}
