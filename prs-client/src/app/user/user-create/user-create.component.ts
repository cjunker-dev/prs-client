import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user: User = new User();

  save(): void {
    console.log("Before create:", this.user);
    this.usrsvc.create(this.user).subscribe(
      res => {
        console.log("User after:", this.user);
        this.user = res;
        this.router.navigateByUrl('/users/list');
      },
      err => {
        console.error(err);
      }
    );
  }
  constructor(
    private usrsvc:UserService,
    private router: Router,
    private sys: SystemService
  ) { }

  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);

  }

}
