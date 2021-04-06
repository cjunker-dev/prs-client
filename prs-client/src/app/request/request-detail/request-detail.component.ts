import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Request } from '../request';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  showVerify: boolean = false;
  request: Request = new Request();
  id: number = 0;

  constructor(
    private sys: SystemService,
    private route: ActivatedRoute,
    private router: Router,
    private rqtsvc: RequestService
  ) { }

  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);
    this.id = this.route.snapshot.params.id;
    this.rqtsvc.get(+this.id).subscribe(
      res => {
        console.log("Request:", res);
        this.request = res;
      },
      err => {
        console.error(err);
      }
    );
  }
  edit(): void {
    this.router.navigateByUrl(`/requests/edit/${this.id}`);
  }
  delete(): void {
    this.rqtsvc.delete(this.request).subscribe(
      res => {
        console.log("request deleted:", res);
        this.router.navigateByUrl('/requests/list');
      }
    );
  }
  toggleVerify(): void {
    this.showVerify = !this.showVerify;
  }
}
