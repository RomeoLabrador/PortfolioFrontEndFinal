import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certificados } from '../model/certificados';

@Injectable({
  providedIn: 'root'
})
export class CertificadosService {
  URL = "https://portfoliobackend-production-cb23.up.railway.app/certificados/"

  constructor(private httpClient:HttpClient) {}

  public lista(): Observable<Certificados[]>{
    return this.httpClient.get<Certificados[]>(this.URL + 'lista');
  }

  public detail(id:number): Observable<Certificados>{
    return this.httpClient.get<Certificados>(this.URL + `detail/${id}`);
  }

  public save(certificados:Certificados):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', certificados);
  }

  public update(id:number, certificados:Certificados): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, certificados);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
