import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: any[] = [
    {display: 'Home', route: '/home'},
    {display: 'Users', route: '/users/list'},
//vendors
//products
//requests
//lineitems
//re views
//login
    {display: 'About', route: '/about'},
    {display: 'Help', route: '/help'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
