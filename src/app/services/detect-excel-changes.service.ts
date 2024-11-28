import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetectExcelChangesService {



  private apiUrl = 'http://localhost:8085/api/v1/detectChanges'; 

  constructor(private http: HttpClient) { }

  getExcelChanges(soluId:number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${soluId}`);
  }
}
