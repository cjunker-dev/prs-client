import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LineItem } from './request-lines';
import { Request } from '../request';

@Injectable({
  providedIn: 'root'
})
export class RequestLinesService {
  baseurl: string = "http://localhost:8080/api/line-items/";
  constructor(
    private http: HttpClient
  ) { }
    //get all by request id
    listByRequestId(id: number): Observable<LineItem[]> {
      return this.http.get(`${this.baseurl}lines-for-pr/${id}`) as Observable<LineItem[]>
    }
  //list
    list(): Observable<LineItem[]> {
      return this.http.get(`${this.baseurl}`) as Observable<LineItem[]>
    }
  //get
  get(id): Observable<LineItem> {
    return this.http.get(`${this.baseurl}${id}`) as Observable<LineItem>
  }
  //create
    create(lineItem: LineItem): Observable<LineItem> {
      return this.http.put(`${this.baseurl}`, lineItem) as Observable<LineItem>
    }
  //edit
    edit(lineItem: LineItem): Observable<LineItem>{
      return this.http.post(`${this.baseurl}`, lineItem) as Observable<LineItem>
    }
  //delete
  delete(lineItem: LineItem): Observable<LineItem>{
    return this.http.delete(`${this.baseurl}${lineItem.id}`) as Observable<LineItem>
  }
}

