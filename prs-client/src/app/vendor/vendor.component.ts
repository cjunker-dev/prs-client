import { Component, OnInit } from '@angular/core';
import { Vendor } from './vendor';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  //declare array
  vendors: Vendor[];
  //declare service
  //on init, declare and subscribe n such, store into array
  constructor() { }

  ngOnInit(): void {
  }

}
