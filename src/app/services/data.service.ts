import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Result} from '../User'


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private link:string = 'http://localhost:3000/results';

  constructor(private http: HttpClient) { 
    
  }
  httpOptions = {
       headers: new HttpHeaders({
         'Content-type': 'application/json'
       })
  }

  getEveryUser():Observable<Result[]> {
    return this.http.get<Result[]>(this.link).pipe();
  }

  getOneUser(id:string):Observable<Result>{
    console.log(id);
    return this.http.get<Result>(this.link + '/' +id).pipe()
  }

 
}
