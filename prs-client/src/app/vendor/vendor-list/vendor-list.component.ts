import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';


@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendors: Vendor[];

  constructor(
    private vdrsvc: VendorService
  ) { }

  ngOnInit(): void {
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


