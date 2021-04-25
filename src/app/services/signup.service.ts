import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signup } from '../model/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
<<<<<<< HEAD
=======
  //private baseUrl = "http://localhost:8080";
>>>>>>> 71719069179e69b203b1effc886a4d4e5cd31d2b
  private baseUrl = "https://medworld.herokuapp.com";
  //private baseUrl = "https://8080-dbdedffdadadeeffdaabdfaccfeebafecbf.examlyiopb.examly.io";
  constructor(private httpClient:HttpClient) { }

  register(cred:Signup):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/signup`,cred);
  }
}
