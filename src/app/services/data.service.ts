import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Result} from '../User'


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private link:string = '../../assets/Data/post.json';

  constructor(private http: HttpClient) { 
   
  }

  getData():Observable<Result[]> {
    return this.http.get<Result[]>(this.link);
  }
}
