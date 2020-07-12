import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { IndexComponent } from './index/index.component';
import { ManagePackageComponent } from './manage-package/manage-package.component';
import { SingleItemComponent } from './single-item/single-item.component';
import { AddItemComponent } from './add-item/add-item.component';



const routes: Routes = [
  {path:'',  redirectTo: "Index",
  },
  { path: 'Index', component: IndexComponent ,
  children: [
    {
      path: 'manage-user',
      component: ManageUserComponent,
     
    },
    {
      path: 'manage-pakcage',
      component: ManagePackageComponent,
     
    },
    {
      path: 'manage-components',
      component: ManagePackageComponent,
     
    },{
      path: 'add-item',
      component: AddItemComponent,
     
    },
  ]
},
  // { path: 'manage-user', component: ManageUserComponent, outlet: "outlet1" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]})
 
export class AdminRoutingModule { }
