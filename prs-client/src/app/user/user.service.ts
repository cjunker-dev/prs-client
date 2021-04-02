import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  baseurl: string = 'http://localhost:8080/api/users/';

  constructor(
    private http: HttpClient
  ) { }

  //get all
    list(): Observable<User[]> {
      return this.http.get(`${this.baseurl}`) as Observable<User[]>
    }
  //get by id
  get(id: number): Observable<User> {
    return this.http.get(`${this.baseurl}${id}`) as Observable<User>
  }
  //create
  create(user: User): Observable<User> {
    return this.http.post(`${this.baseurl}`, user) as Observable<User>
  }
  //update
  update(user: User): Observable<User> {
    return this.http.put(`${this.baseurl}`, user) as Observable<User>
  }
  //delete
  delete(user: User): Observable <User> {
    return this.http.delete(`${this.baseurl}${user.id}`) as Observable<User>
  }

  //login
  login(username: string, password: string): Observable<User>{
    return this.http.get(`${this.baseurl}${username}/${password}`) as Observable<User>;
  }
}
