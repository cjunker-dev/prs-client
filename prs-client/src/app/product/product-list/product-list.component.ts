import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  searchCriteria: string = "";
  isAdmin: boolean = false;
  constructor(
    private pdtsvc: ProductService,
    private sys: SystemService
  ) { }

  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);
    this.isAdmin = this.sys.validateAdmin(this.sys.loggedInUser);
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
