import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';
import { LineItem } from '../request-lines';
import { RequestLinesService } from '../request-lines.service';

@Component({
  selector: 'app-request-lines-create',
  templateUrl: './request-lines-create.component.html',
  styleUrls: ['./request-lines-create.component.css']
})
export class RequestLinesCreateComponent implements OnInit {
  //declare instance of lineitem
  //how do i pass in the correct Request ID?
  lineItem: LineItem = new LineItem();
  constructor(
    private sys: SystemService,
    private lisvc: RequestLinesService
  ) { }

  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);

  }
  save(): void {
    this.lisvc.create(this.lineItem).subscribe();
  }
}
