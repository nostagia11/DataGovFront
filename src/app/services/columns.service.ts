import { Injectable } from '@angular/core';
import { Columns } from '../interfaces/columns';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColumnsService {

  constructor(private http : HttpClient) { }

  private baseURL = "http://localhost:8085/api/v1/columns"

  getColumns():Observable<Columns[]>{
    return this.http.get<Columns[]>(`${this.baseURL}`);

  }

  createColumns(Columns:Columns): Observable<Object>{
    return this.http.post(`${this.baseURL}/savecolumn`,Columns);
  }

  getColumnsById(id:number):Observable<Columns>{
    return this.http.get<Columns>(`${this.baseURL}/${id}`)
  }

  updateColumns(id:number, Columns:Columns){
    return this.http.put(`${this.baseURL}/${id}`,Columns);
  }

  deleteColumns(id:number):Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
}
}
