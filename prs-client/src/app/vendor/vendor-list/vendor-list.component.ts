import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';


@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendors: Vendor[];
  searchCriteria: string = '';
  isAdmin: boolean = false;
  constructor(
    private vdrsvc: VendorService,
    private sys: SystemService
  ) { }

  ngOnInit(): void {
    this.sys.validateLogin(this.sys.loggedInUser);
    this.isAdmin = this.sys.validateAdmin(this.sys.loggedInUser);
    this.vdrsvc.list().subscribe(
      res => {
        console.log("Vendors:", res);
        this.vendors=res as Vendor[];
      },
      err => {
        console.error(err);
      }
    );
  }
  }


