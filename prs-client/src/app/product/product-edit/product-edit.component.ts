import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Vendor } from 'src/app/vendor/vendor';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  id: number = 0;
  vendors: Vendor[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vdrsvc: VendorService,
    private pdtsvc: ProductService,
    private sys: SystemService
  ) { }

  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);
    let id = this.route.snapshot.params.id;
    this.vdrsvc.list().subscribe(
      res => {
        console.log("Vendors:", res);
        this.vendors = res;
      },
      err => {
        console.error(err);
      }
    );
    this.pdtsvc.get(+id).subscribe(
      res => {
        console.log("Product:", res);
        this.product = res;
      },
      err => {
        console.error(err);
      }
    );
  }
  save(): void {
    this.pdtsvc.edit(this.product).subscribe(
      res => {
        console.log("Product saved:", res);
        this.product = res;
        this.router.navigateByUrl('/products/list');
      },
      err => {
        console.error(err);

      }
    );

  }
  compFn(a: Vendor, b: Vendor): boolean {
    return a && b && a.id === b.id;
  }
}


