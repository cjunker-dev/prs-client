import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Request} from './request';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  baseurl: string = 'http://localhost:8080/api/requests/';

  constructor(
    private http: HttpClient
  ) { }

  //list
  list(): Observable<Request[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Request[]>
  }
  //detail
  get(id: number): Observable<Request> {
    return this.http.get(`${this.baseurl}${id}`) as Observable<Request>
  }
  //create
  create(request: Request): Observable<Request> {
    return this.http.put(`${this.baseurl}`, request) as Observable<Request>
  }
  //update
  edit(request: Request): Observable<Request> {
    return this.http.post(`${this.baseurl}`, request) as Observable<Request>
  }
  //delete
  delete(request: Request): Observable<Request> {
    return this.http.delete(`${this.baseurl}${request.id}`) as Observable<Request>
  }
}
