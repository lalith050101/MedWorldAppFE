import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login';
import { UserToken } from '../model/user-token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
<<<<<<< HEAD
  private baseUrl = "https://medworld.herokuapp.com";
=======
  //private baseUrl = "http://localhost:8080";
  private baseUrl = "https://medworld.herokuapp.com"
>>>>>>> 71719069179e69b203b1effc886a4d4e5cd31d2b
  //private baseUrl = "https://8080-dbdedffdadadeeffdaabdfaccfeebafecbf.examlyiopb.examly.io";
  constructor(private httpClient:HttpClient) { }

  login(cred:Login):Observable<UserToken>{
    return this.httpClient.post<UserToken>(`${this.baseUrl}/login`,cred);
  }

  getUserStatus():Observable<UserToken>{
    return this.httpClient.get<UserToken>(`${this.baseUrl}/userStatus`);
  }

}
