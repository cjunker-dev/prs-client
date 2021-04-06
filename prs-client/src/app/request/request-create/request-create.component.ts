import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user';
import { Request} from '../request'
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  request: Request = new Request();
  user: User = new User();
  constructor(
    private sys: SystemService,
    private router: Router,
    private rqtsvc: RequestService
  ) { }

  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);
    this.user = this.sys.loggedInUser;
    this.request.user = this.user;
    this.request.status = "NEW";
  }

  save(): void {
    this.rqtsvc.create(this.request).subscribe(
      res => {
        console.log("Request created:", res);
        this.router.navigateByUrl('/requests/list');
      },
      err => {
        console.error(err);
      }
    );
  }
}
