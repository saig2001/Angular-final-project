import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  getServices():Observable<any> {
     return this.http.get("http://localhost:4500/services");

  }

  getDetails(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/details/"+id)
  }

  getServiceById(id:number):Observable<any>{
    return this.http.get("http://localhost:4500/services/"+id)
  }
}