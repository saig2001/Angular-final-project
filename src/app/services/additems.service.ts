import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AdditemsService {
  httpOptions:any;
  constructor(private http:HttpClient) { }

  getAdditems(): Observable<any> {
    return this.http.get<any>("http://localhost:4500/additems/");
  }


  
  postFeedback(obj:any):Observable<any>{

    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })
  
  return this.http.post("http://localhost:4500/additems",obj,this.httpOptions);
 }
}
  