import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from '../model/Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
<<<<<<< HEAD
=======
 // private baseUrl = "http://localhost:8080";
>>>>>>> 71719069179e69b203b1effc886a4d4e5cd31d2b
  private baseUrl = "https://medworld.herokuapp.com";
  //private baseUrl = "https://8080-dbdedffdadadeeffdaabdfaccfeebafecbf.examlyiopb.examly.io";
  constructor(private httpClient:HttpClient) { }

  getUserInfo():Observable<UserDetails>{
    return this.httpClient.get<UserDetails>(`${this.baseUrl}/profile`);
  }

  updateUserInfo(data:UserDetails):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/profile`,data)
  }
}
