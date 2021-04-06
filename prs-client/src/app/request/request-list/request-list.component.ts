import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requests: Request[];
  searchCriteria = '';

  constructor(
    private sys: SystemService,
    private rqtsvc: RequestService
  ) { }

  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);
    this.rqtsvc.list().subscribe(
      res => {
        console.log("Requests:", res);
        this.requests = res;
        //this.users=res as User[];

      },
      err => {
        console.error(err);
      }
    );
  }

}
