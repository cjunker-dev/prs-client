import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component'
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  
  {path: 'users/list', component: UserListComponent},
  {path: 'users/detail/:id', component: UserDetailComponent},
  {path: 'users/edit/:id', component: UserEditComponent},
  {path: 'users/create', component: UserCreateComponent},
  {path: 'vendors/list', component: VendorListComponent},
  {path: 'vendors/detail/:id', component: VendorDetailComponent},
  {path: 'about', component: AboutComponent},
  {path: 'help', component: HelpComponent},
  { path: 'login', component: UserLoginComponent},

  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
