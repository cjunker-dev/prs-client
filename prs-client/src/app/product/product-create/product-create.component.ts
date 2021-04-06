import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Vendor } from 'src/app/vendor/vendor';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = new Product();
  vendors: Vendor[] = [];
  constructor(
    private vdrsvc: VendorService,
    private pdtsvc: ProductService,
    private router: Router,
    private sys: SystemService
  ) { }

  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);
    this.vdrsvc.list().subscribe(
      res => {
        console.log("Vendor list:", res);
        this.vendors = res;
      }
    );

  }

  save(): void {
    this.pdtsvc.create(this.product).subscribe(
      res => {
        console.log("Saved:", res);
        this.product = res;
        this.router.navigateByUrl('/products/list');
      },
      err => {
        console.error("Not saved", err);
        
      }
    );
  }
}

