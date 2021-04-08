import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/request/request-lines/request-lines';
import { RequestLinesService } from 'src/app/request/request-lines/request-lines.service';
import { RequestService } from 'src/app/request/request.service';
import { SystemService } from 'src/app/system.service';
import { Request } from '../../request/request';

@Component({
  selector: 'app-review-approve',
  templateUrl: './review-approve.component.html',
  styleUrls: ['./review-approve.component.css']
})
export class ReviewApproveComponent implements OnInit {
  request: Request = new Request();
  id: number = 0;
  lineItems: LineItem[];
  showReasonForRejection:boolean = false;

  constructor(
    private rqtsvc: RequestService,
    private sys: SystemService,
    private route: ActivatedRoute,
    private router: Router,
    private lisvc: RequestLinesService
  ) { }
  approve(): void {
    console.log("B4:", this.request);
    this.rqtsvc.approve(this.request).subscribe(
      res => {
        console.log("Approved request:", res);
        this.request = res;
        this.router.navigateByUrl('/reviews/list');
      },
      err => {
        console.error(err);
      }
    );

  }
  reject(): void {
    this.toggleVerify();
    
  }

  confirmReject(): void {
    this.rqtsvc.reject(this.request).subscribe(
      res => {
        console.log("Rejected request:", res);
        this.request = res;
        this.router.navigateByUrl('/reviews/list');
      },
      err => {
        console.error(err);
      }
    );
  }
  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);
    this.refresh();
  }
  refresh(): void {
    this.id = this.route.snapshot.params.id;
    this.rqtsvc.get(this.id).subscribe(
      res => {
        console.log("Requests:", res);
        this.request = res;
        //this.users=res as User[];
      },
      err => {
        console.error(err);
      }
    );
    this.lisvc.listByRequestId(this.id).subscribe(
      res => {
        console.log("Requests:", res);
        this.lineItems = res;
        //this.users=res as User[];
      },
      err => {
        console.error(err);
      }
    );
  }
  toggleVerify(): void {
    this.showReasonForRejection = !this.showReasonForRejection;
  }

}
