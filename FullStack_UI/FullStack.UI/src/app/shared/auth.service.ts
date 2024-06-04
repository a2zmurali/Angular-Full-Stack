import { Injectable } from '@angular/core';
import { UserCredential } from '../Modles/UserCredential';
import { environment } from '../../environments/environment.development';
import { Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl:string = environment.baseApiUrl;
  constructor(private http:HttpClient) { }


  authenticate(loginRequest:UserCredential):Observable<string>{
    return this.http.post<{token:string}>(this.baseUrl+ 'api/Login/Auth',loginRequest)
    .pipe(map((response)=>response.token));
  }




}
