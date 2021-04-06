import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product';
import { ProductService } from 'src/app/product/product.service';
import { SystemService } from 'src/app/system.service';
import { LineItem } from '../request-lines';
import { RequestLinesService } from '../request-lines.service';

@Component({
  selector: 'app-request-lines-edit',
  templateUrl: './request-lines-edit.component.html',
  styleUrls: ['./request-lines-edit.component.css']
})
export class RequestLinesEditComponent implements OnInit {
  lineItem: LineItem;
  id: number = 0;
  products: Product[];
  constructor(
    private sys: SystemService,
    private router: Router,
    private route: ActivatedRoute,
    private lisvc: RequestLinesService,
    private pdtsvc: ProductService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.pdtsvc.list().subscribe(
      res => {
        console.log("Products:", res);
        this.products = res;
      },
      err => {
        console.error(err);
      }
    );
    this.lisvc.get(this.id).subscribe(
      res => {
        console.log("Line item selected:", res);
        this.lineItem = res;
      },
      err => {
        console.error(err);
      }
    );
  }
  save(): void {
    this.lisvc.edit(this.lineItem).subscribe(
      res => {
        console.log("New lineitem:", res);
        this.lineItem = res;
        this.router.navigateByUrl('/requests/lines');
      }
    );
  }
  compFn(a: Product, b: Product): boolean {
    return a && b && a.id === b.id;
  }
}
