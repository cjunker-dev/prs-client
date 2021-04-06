import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user/user';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
loggedInUser: User = null;

  constructor(
    private router: Router
  ) { }

  validateLogin(loggedInUser){
    if (this.loggedInUser == null){
    this.router.navigateByUrl('/login');
   }
  }
  
}





