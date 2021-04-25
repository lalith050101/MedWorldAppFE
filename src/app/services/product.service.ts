import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
<<<<<<< HEAD
  private baseUrl = "https://medworld.herokuapp.com"
=======
  //private baseUrl = "http://localhost:8080";
  private baseUrl = "https://medworld.herokuapp.com";
>>>>>>> 71719069179e69b203b1effc886a4d4e5cd31d2b
  //private baseUrl = "https://8080-dbdedffdadadeeffdaabdfaccfeebafecbf.examlyiopb.examly.io";
  constructor(private httpClient: HttpClient) { 

  }
  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseUrl}/admin`);
  }

  addProduct(product:Product):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/admin/addProduct`,product);
  } 
  getProductById(id:string):Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseUrl}/admin/productEdit/${id}`);
  }
  saveProductById(id:string,product:Product):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/admin/productEdit/${id}`,product);
  }
  deleteProductById(id:string):Observable<Object>{
    return this.httpClient.get(`${this.baseUrl}/admin/delete/${id}`);
  }
}
