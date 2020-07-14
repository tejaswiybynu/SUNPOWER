import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../services/user.service';
import { NgForm, NgModel } from '@angular/forms';

import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Users } from '../model/Users';
import { NavbarService } from '../services/navbar.service';


@Component({
  selector: 'app-sign-up-customer',
  templateUrl: './sign-up-customer.component.html',
  styleUrls: ['./sign-up-customer.component.css']
})
export class SignUpCustomerComponent implements OnInit {
  data: Users;
  public login: number;

  constructor(private router: Router,
    private service: UserService, private toastr: ToastrService, private navbarService: NavbarService) { }

  ngOnInit() {
    this.data = {
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phoneNumber: "",
      role: "Admin",
      password: ""
    }
    if (this.navbarService.user) {
      this.data = this.navbarService.user;
      this.navbarService.customerLogin.subscribe( x => this.login= x );
    } else {
      this.login = 0;
    }
  }

  resetFrom(form?: NgForm) {
    if (form == null)
      form.resetForm();
    this.data = {
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phoneNumber: "",
      role: "Admin",
      password: ""
    }



  }
  onSubmit(form: NgForm) {
    form.value.Role = "Customer";
    if (form.value.Id > 0) {
      this.updateData(form);
    } else {
      this.insertDate(form);
    }

  }
  insertDate(form: NgForm) {
    this.service.postUser(form.value).subscribe(
      res => {
        this.resetFrom(form);
        this.toastr.success('Information saved successfully', 'Register User');
        this.router.navigateByUrl('/sign-in');
      },
      err => {
        console.log(err)
      }

    )
  }
  updateData(form: NgForm) {
    this.service.putUser(form.value.Id, form.value).subscribe(
      res => {
        this.resetFrom(form);
        this.toastr.success('Information saved successfully', 'Register User');
        
      },
      err => {
        console.log(err)
      }

    )
  }
}
