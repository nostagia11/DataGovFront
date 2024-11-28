import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Regle } from '../Models/Regle';

@Injectable({
  providedIn: 'root'
})
export class RegleService {

  constructor(private http:HttpClient) { 
  }

  public getRegles():Observable<Regle[]>{
    return this.http.get<Regle[]>("http://localhost:8085/api/v1/Regle");
  }
  addRegle(Regle:Regle){
    return this.http.post<Regle>("http://localhost:8085/api/v1/Regle",Regle);
    }
    updateRegle(id:number ,Regle:Regle){
      return this.http.put<Regle>("http://localhost:8085/api/v1/Regle/"+id,Regle);
      }

      public getRegle(id:number):Observable<Regle[]>{
        return this.http.get<Regle[]>("http://localhost:8085/api/v1/Regle/loi/"+id);
      }

      public getRegle1(id:number){
        return this.http.get("http://localhost:8085/api/v1/Regle/"+id);
    
        }
        public deleteRegleById(id:number){
          return this.http.delete("http://localhost:8085/api/v1/Regle/"+id);
      
          }
}
