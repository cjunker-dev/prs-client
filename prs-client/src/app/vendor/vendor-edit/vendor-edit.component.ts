import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  vendor: Vendor = new Vendor();
  id: number = 0;

  constructor(
    private vdrsvc: VendorService,
    private router: Router,
    private route: ActivatedRoute,
    private sys: SystemService
  ) { }

  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);
    let id = this.route.snapshot.params.id;
    this.vdrsvc.get(+id).subscribe(
      res => {
        console.log("Vendor loaded", res);
        this.vendor = res;
      },
      err => {
        console.error(err);
      }
    );
  }
  save(): void {
    console.log("Before:", this.vendor);
    this.vdrsvc.edit(this.vendor).subscribe(
      res => {
        console.log("After edit:", res);
        this.router.navigateByUrl("/vendors/list");
      },
      err => {
        console.log(err);
      }
    )
  }
}
