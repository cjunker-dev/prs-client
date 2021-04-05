import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { VendorComponent } from './vendor/vendor.component';
import { RequestComponent } from './request/request.component';
import { LineItemComponent } from './line-item/line-item.component';
import { BoolDisplayPipe } from './bool-display.pipe';
import { SearchUserPipe } from './user/search-user.pipe';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorDeleteComponent } from './vendor/vendor-delete/vendor-delete.component';
import { SearchVendorPipe } from './vendor/search-vendor.pipe';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HomeComponent,
    MenuComponent,
    HelpComponent,
    AboutComponent,
    UserLoginComponent,
    UserEditComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserLoginComponent,
    VendorComponent,
    RequestComponent,
    LineItemComponent,
    BoolDisplayPipe,
    SearchUserPipe,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,
    VendorDeleteComponent,
    SearchVendorPipe,
    ProductListComponent,
    ProductDetailComponent,
    ProductDeleteComponent,
    ProductEditComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
