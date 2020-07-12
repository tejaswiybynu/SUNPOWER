import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManagePackageComponent } from './manage-package/manage-package.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { MatDialogModule, MatTableModule, MatIconModule, MatButtonModule, MatFormFieldModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SingleItemComponent } from './single-item/single-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [ManageUserComponent, ManagePackageComponent, NavbarComponent, IndexComponent, SingleItemComponent, AddItemComponent],
  exports: [ManageUserComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,FormsModule,MatSnackBarModule,ToastrModule,
    ReactiveFormsModule ,MatTableModule,MatIconModule,MatButtonModule,MatDialogModule,MatPaginatorModule,MatFormFieldModule
  ]
})
export class AdminModule { }
