import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user/user';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
loggedInUser: User = new User();
isAdmin: boolean = false;
isReviewer: boolean = false;

  constructor(
    private router: Router
  ) { }

  validateLogin(loggedInUser: User){
    if (this.loggedInUser == null){
    //this.router.navigateByUrl('/login');
    console.warn("Check for login disabled!!");
   }
  }

  validateAdmin(loggedInUser: User){
    return (this.loggedInUser.isAdmin);
  }
  validateReviewer(loggedInUser: User){
    return (this.loggedInUser.isReviewer);

  }
  
}





