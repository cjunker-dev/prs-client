import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request/request.service';
import { SystemService } from 'src/app/system.service';
import { Request } from '../../request/request';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  //load in requests where the userid != loggedInUser
  requests: Request[];
  filteredRequests: Request[];
  constructor(
    private sys: SystemService,
    private rqtsvc: RequestService
  ) { }

  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);
    this.rqtsvc.list().subscribe(
      res => {
        console.log("All requests:", res);
        this.requests = res;
      },
      err => {
        console.error(err);
      }
    );
    var r:any;
    for (r in this.requests){
      if (r.user.username !== this.sys.loggedInUser.username){
        console.log("user match");
        this.filteredRequests.push(r);
      }
    }
    console.log("Filtered list:", this.filteredRequests);
  }

}
