import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  vendor: Vendor = null;
  id: number = 0;
  showVerify: boolean = false;
  isAdmin: boolean = false;

  constructor(
    private vdrsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router,
    private sys: SystemService
  ) { }

  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);
    this.sys.validateAdmin(this.sys.loggedInUser);
    this.id = this.route.snapshot.params.id;
    this.vdrsvc.get(+this.id).subscribe(
      res => {
        console.log("Vendor:", res);
        this.vendor = res;
      },
      err => {
        console.error(err);
      }
    )
  }
  edit() {
    this.router.navigateByUrl(`/vendors/edit/${this.id}`);
  }

  delete(){
    this.vdrsvc.delete(this.vendor).subscribe(
      res => {
        console.log("Delete successful", res);
        this.router.navigateByUrl("vendors/list")
      }
    );
  }
  toggleVerify(){
    this.showVerify = !this.showVerify;
  }
}
