import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseurl: string = 'http://localhost:8080/api/products/';
  constructor(
    private http: HttpClient
  ) { }

  //list all
    list(): Observable<Product[]>{
      return this.http.get(`${this.baseurl}`) as Observable<Product[]>
    }
  //detail
    get(id:number): Observable<Product> {
      return this.http.get(`${this.baseurl}${id}`) as Observable<Product>
    }
  //create
    create(product: Product): Observable<Product>{
      return this.http.put(`${this.baseurl}`, product) as Observable<Product>
    }
  //update
    edit(product: Product): Observable<Product>{
      return this.http.post(`${this.baseurl}`, product) as Observable<Product>
    }
  //delete
    delete(product: Product): Observable<Product>{
      return this.http.delete(`${this.baseurl}${product.id}`) as Observable<Product>
    }
}
