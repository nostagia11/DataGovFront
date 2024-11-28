import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  private server = 'http://localhost:8085/api/v1/scans';

  constructor(private http: HttpClient) { }

    // define function to upload files
    upload(formData: FormData): Observable<HttpEvent<string[]>> {
      return this.http.post<string[]>(`${this.server}/uploadfiles`, formData, {
        reportProgress: true,
        observe: 'events'
      });
    }

    scanExcel(formData: FormData): Observable<any> {
      return this.http.post<any>( `${this.server}/scanExcel`,formData );
    }
}
