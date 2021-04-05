import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product();
  id: number = 0;
  showVerify: Boolean = false;
  constructor(
    private pdtsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.pdtsvc.get(+this.id).subscribe(
      res => {
        console.log('Product:', res);
        this.product = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  toggleVerify(): void {
    this.showVerify = !this.showVerify;
  }

  edit(): void {
    this.router.navigateByUrl(`/products/edit/${this.id}`);
  }

  delete(): void {
    this.pdtsvc.delete(this.product).subscribe(
      res => {
        console.log("user deleted:", res);
        this.router.navigateByUrl('/products/list');
      },
      err => {
        console.error(err);
      }
    );
  }
}
