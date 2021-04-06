import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Request } from '../request';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  request: Request = new Request();
  id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private rqtsvc: RequestService,
    private sys: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);
    this.id = this.route.snapshot.params.id;
    this.rqtsvc.get(this.id).subscribe(
      res => {
        console.log("request pulled:", res);
        this.request = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  save(): void {
    this.rqtsvc.edit(this.request).subscribe(
      res => {
        console.log("edited:", res);
        this.router.navigateByUrl('/requests/list');
      }
    );
  }
}
