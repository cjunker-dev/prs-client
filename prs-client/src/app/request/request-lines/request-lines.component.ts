import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Request } from '../request'; 
import { RequestService } from '../request.service';
import { LineItem } from './request-lines';
import { RequestLinesService } from './request-lines.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {
  request: Request = new Request();
  id: number = 0;
  lineItems: LineItem[];
  //list array of request lines
  constructor(
    private route: ActivatedRoute,
    private rqtsvc: RequestService,
    private sys: SystemService,
    private lisvc: RequestLinesService
  ) { }

  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);
    this.id = this.route.snapshot.params.id;
    this.rqtsvc.get(this.id).subscribe(
      res => {
        console.log(res);
        this.request = res;
      },
      err => {
        console.error(err);
      }
    );
    this.lisvc.listByRequestId(this.id).subscribe(
      res => {
        console.log("Line items for request id: ", res);
        this.lineItems = res;
      }
    );

  
  }
  

}
