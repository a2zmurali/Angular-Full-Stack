import { Injectable } from '@angular/core';
import { UserCredential } from '../Modles/UserCredential';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
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

  private dataSubjectLogin = new BehaviorSubject<boolean>(false);

  IsLoggedin$ = this.dataSubjectLogin.asObservable();

  LoggedIn(newValue:boolean)
  {
        this.dataSubjectLogin.next(true);
        this.IsLoggedIn();
  }
  LoggedOut(newValue:boolean)
  {
    this.dataSubjectLogin.next(false);
    sessionStorage.clear();
  }


  IsLoggedIn(){
    return !!sessionStorage.getItem("token")
  }





}
