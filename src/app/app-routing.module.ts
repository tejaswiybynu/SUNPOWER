import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { SignUpAdminComponent } from './sign-up-admin/sign-up-admin.component';
import { SignUpTeamMemberComponent } from './sign-up-team-member/sign-up-team-member.component';
import { SignUpCustomerComponent } from './sign-up-customer/sign-up-customer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { ManageUserComponent } from './manage-user/manage-user.component';

import { PrecheckComponent } from './customer/precheck/precheck.component';
import { InstallationComponent } from './customer/installation/installation.component';
import { ComplaintsComponent } from './customer/complaints/complaints.component';
import { PackagesComponent } from './customer/packages/packages.component';
import { PreCheckComponent } from './pre-check/pre-check.component';
import { AddPrecheckComponent } from './customer/add-precheck/add-precheck.component';
import { ItemComponent } from './customer/item/item.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
 
{path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: IndexComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'sign-in', component: LoginComponent },
  { path: 'sing-up-admin', component: SignUpAdminComponent },
  { path: 'sing-up-team', component: SignUpTeamMemberComponent },
  { path: 'sign-up-customer', component: SignUpCustomerComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'sign-up', component: SingUpComponent },
  { path: 'pre-check',component:PreCheckComponent},
  {
    path: 'manage-precheck',
    component: PrecheckComponent,
   
  },
  {
     path:'system-components',
      component:ItemComponent
  },
  {
    path: 'add-precheck',
    component: AddPrecheckComponent,
   
  },
  
  {
    path: 'manage-installation',
    component: InstallationComponent,
   
  },
  {
    path: 'manage-complaints',
    component: ComplaintsComponent,
   
  },
  {
    path: 'manage-packages',
    component: PackagesComponent,
   
  },
  {
    path: 'cart',
    component: CartComponent,
   
  },
  {
    path: 'admin',
    loadChildren:'src/app/admin/admin.module#AdminModule'
  },
  {
    path: 'team',
    loadChildren:'src/app/team/team.module#TeamModule'
  },
  {
    path: 'customer',
    loadChildren:'src/app/customer/customer.module#CustomerModule'
  },
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
