import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User = new User();
  id: number = 0;

  constructor(
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private sys: SystemService
  ) { }

  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);
    let id = this.route.snapshot.params.id;
    this.usrsvc.get(+id).subscribe(
      res => {
        console.log("User:", res);
        this.user = res;
      },
      err => {
        console.error(err);
      }
    )
  }

  save(): void {
    console.log("Before edit:", this.user);
    this.usrsvc.update(this.user).subscribe(
      res => {
        console.log("After edit:", this.user);
        this.router.navigateByUrl("/users/list");
      },
      err => {
        console.log(err);
      }
    )
  }
}
