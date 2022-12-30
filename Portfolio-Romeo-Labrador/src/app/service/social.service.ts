import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Social } from '../model/social';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  URL = 'http://localhost:8080/social/'

  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Social[]>{
    return this.httpClient.get<Social[]>(this.URL + 'lista');
  }

  public detail(id:number): Observable<Social>{
    return this.httpClient.get<Social>(this.URL + `detail/${id}`);
  }

  public save(social:Social):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', social);
  }

  public update(id:number, social:Social): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, social);
  }

}
