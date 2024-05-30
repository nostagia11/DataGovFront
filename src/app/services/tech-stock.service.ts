import { Injectable } from '@angular/core';
import { TechStock } from '../interfaces/tech-stock';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TechStockService {

  constructor(private http : HttpClient) { }

  private baseURL = "http://localhost:8082/api/v1/techstock"

  getTechStock():Observable<TechStock[]>{
    return this.http.get<TechStock[]>(`${this.baseURL}`);

  }

  createTechStock(TechStock:TechStock): Observable<Object>{
    return this.http.post(`${this.baseURL}/savetechstock`,TechStock);
  }

  getTechStockById(id:number):Observable<TechStock>{
    return this.http.get<TechStock>(`${this.baseURL}/${id}`)
  }

  updateTechStock(id:number, TechStock:TechStock){
    return this.http.put(`${this.baseURL}/${id}`,TechStock);
  }

  deleteTechStock(id:number):Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
}
}
