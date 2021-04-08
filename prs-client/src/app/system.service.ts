import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user/user';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
loggedInUser: User = null;
isAdmin: boolean = false;
isReviewer: boolean = false;

  constructor(
    private router: Router
  ) { }

  validateLogin(loggedInUser: User){
    if (this.loggedInUser == null){
    this.router.navigateByUrl('/login');
    console.warn("Check for login disabled!!");
   }
  }

  validateCredentials(loggedInUser: User){
    if (this.loggedInUser.isReviewer == true){
      this.isReviewer = true;
    }
    if (this.loggedInUser.isAdmin == true){
      this.isAdmin = true;
    } 

  }
  
}





