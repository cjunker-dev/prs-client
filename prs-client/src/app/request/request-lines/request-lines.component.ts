import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Request } from '../request'; 
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {
  request: Request = new Request();
  id: number = 0;
  //list array of requiest lines
  constructor(
    private route: ActivatedRoute,
    private rqtsvc: RequestService,
    private sys: SystemService
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
  }

}
