import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  vendor: Vendor = new Vendor();

  constructor(
    private vdrsvc: VendorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  save(): void {
    console.log("Vendor before create:", this.vendor);
    this.vdrsvc.create(this.vendor).subscribe(
      res => {
        console.log("Vendor after create:", res);
        this.vendor = res;
        this.router.navigateByUrl('/vendors/list');
      },
      err => {
        console.error(err);
      }
    );
  }
}
