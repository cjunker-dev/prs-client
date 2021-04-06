import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
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
    private router: Router,
    private sys: SystemService

  ) { }

  ngOnInit(): void {
    //check login
    this.sys.validateLogin(this.sys.loggedInUser);
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
