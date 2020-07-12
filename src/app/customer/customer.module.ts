import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms'
import { CustomerRoutingModule } from './customer-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
// import { ComplaintsComponent } from './complaints/complaints.component';
// import { PackagesComponent } from './packages/packages.component';
// import { PrecheckComponent } from './precheck/precheck.component';
// import { InstallationComponent } from './installation/installation.component';
import { IndexComponent } from './index/index.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatIconModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { AddPrecheckComponent } from './add-precheck/add-precheck.component';



@NgModule({
  declarations: [NavbarComponent, IndexComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,FormsModule,
    ReactiveFormsModule ,MatTableModule,MatIconModule,MatButtonModule,MatDialogModule
  ]
})
export class CustomerModule { }
