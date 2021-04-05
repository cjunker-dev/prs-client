import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(
    private pdtsvc: ProductService
  ) { }

  ngOnInit(): void {
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

}
