import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User = null;
  id: number = 0;
  showVerify: boolean = false;
  isAdmin: boolean = false;
  isNotAdmin: boolean = true;

  constructor(
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private sys: SystemService
  ) { }

  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);
    this.isAdmin = this.sys.validateAdmin(this.sys.loggedInUser);
    this.isNotAdmin = this.sys.validateAdmin(this.sys.loggedInUser);
    this.id = this.route.snapshot.params.id;
    this.usrsvc.get(+this.id).subscribe(
      res => {
        console.log("User:", res);
        this.user = res;
      },
      err => {
        console.error(err);
      }
    )
  }

  toggleVerify(): void {
    this.showVerify = !this.showVerify;
  }

  edit(): void {
    this.router.navigateByUrl(`/users/edit/${this.id}`);
  }

  delete(): void {
    this.usrsvc.delete(this.user).subscribe(
      res => {
        console.log("Delete successful", res);
        this.router.navigateByUrl("users/list")
      }
    );
  }


}
