import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product';
import { SystemService } from 'src/app/system.service';
import { LineItem } from '../request-lines';
import { RequestLinesService } from '../request-lines.service';
import { Request } from '../../request';
import { RequestService } from '../../request.service';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-request-lines-create',
  templateUrl: './request-lines-create.component.html',
  styleUrls: ['./request-lines-create.component.css']
})
export class RequestLinesCreateComponent implements OnInit {
  //declare instance of lineitem
  //how do i pass in the correct Request ID?
  lineItem: LineItem = new LineItem();
  reqId: number = 0;
  products: Product[];
  request: Request;
  constructor(
    private sys: SystemService,
    private lisvc: RequestLinesService,
    private route: ActivatedRoute,
    private rqtsvc: RequestService,
    private pdtsvc: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);
    this.reqId = this.route.snapshot.params.reqId;
    console.log(this.reqId);
    this.rqtsvc.get(this.reqId).subscribe(
      res => {
        console.log("Request found by id:", res);
        this.lineItem.request = res;
      },
      err => {
        console.error(err);
      }
    );
    this.pdtsvc.list().subscribe(
      res => {
        console.log("Products:", res);
        this.products = res;
      },
      err => {
        console.error(err);
      }
    );
  }
  save(): void {
    this.lisvc.create(this.lineItem).subscribe(
      res => {
        console.log("Created lineitem:", res);
        this.lineItem = res;
        this.router.navigateByUrl(`/requests/lines/${this.reqId}`);
      }
    );
  }
  compFn(a: Product, b: Product): boolean {
    return a && b && a.id === b.id;
  }
}
