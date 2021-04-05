import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  baseurl: string = 'http://localhost:8080/api/vendors/';

  constructor(
    private http: HttpClient
  ) { }

  //list
    list(): Observable<Vendor[]> {
      return this.http.get(`${this.baseurl}`) as Observable<Vendor[]>
    }
  //detail 
    get(id: number): Observable<Vendor> {
      return this.http.get(`${this.baseurl}${id}`) as Observable<Vendor>
    }
  //create
    create(vendor: Vendor): Observable<Vendor> {
      return this.http.post(`${this.baseurl}`, vendor) as Observable<Vendor>
    }
  //edit
    edit(vendor: Vendor): Observable<Vendor> {
      return this.http.put(`${this.baseurl}`, vendor) as Observable<Vendor>
    }
  //delete
  delete(vendor: Vendor): Observable<Vendor> {
    return this.http.delete(`${this.baseurl}${vendor.id}`) as Observable<Vendor>
  }
}
