import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/system.service'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  message: string ="";
  user: User = new User();
  constructor(
    private sys: SystemService,
    private usrsvc: UserService,
    private router: Router
  ) { }
  
login(): void {
  console.log("Before login:", this.user);
  this.usrsvc.login(this.user.username, this.user.password).subscribe(
    res => {
      console.log("User:", res, " is logged in.");
      //should move you to user list
      this.sys.loggedInUser = res;
      this.router.navigateByUrl("/users/list");
    },
    err => {
      console.error(err);
      this.message = "Username / password is not valid.";
    }
  );
}
  ngOnInit(): void {
  }

}
