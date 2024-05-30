import { Injectable } from '@angular/core';
import { Tables } from '../interfaces/tables';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor(private http : HttpClient) { }

  private baseURL = "http://localhost:8082/api/v1/Tables"

  getTables():Observable<Tables[]>{
    return this.http.get<Tables[]>(`${this.baseURL}`);

  }

  createTables(Tables:Tables): Observable<Object>{
    return this.http.post(`${this.baseURL}/savetable`,Tables);
  }

  getTablesById(id:number):Observable<Tables>{
    return this.http.get<Tables>(`${this.baseURL}/${id}`)
  }

  updateTables(id:number, Tables:Tables){
    return this.http.put(`${this.baseURL}/${id}`,Tables);
  }

  deleteTables(id:number):Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
}
}
