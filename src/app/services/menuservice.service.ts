import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuserviceService {

  constructor(private http:HttpClient) { }

  
 getMenuId(id:number):Observable<any>{

 return this.http.get("http://localhost:4500/menuplan/"+id)

 }
 getMenu():Observable<any>{

  return this.http.get("http://localhost:4500/menuplan/")
 
  }
}
