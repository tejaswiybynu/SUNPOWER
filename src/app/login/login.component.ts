import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../services/navbar.service';
import { LoginService } from '../services/login.service';
import { NgForm, NgModel } from '@angular/forms';
import { Users } from '../model/Users';
import { Toast, ToastRef, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id: number;
  role: string;
  constructor(private router: Router, private userLogin: NavbarService
    , private toaster: ToastrService, private loginService: LoginService) { }

  ngOnInit() {

  }
  Login(email, password) {

    this.loginService.getUser(email.value, password.value).subscribe(x => {
      this.userLogin.user = x;
      this.userLogin.selectedcat = "THE CABIN";
      this.UpdateInfo();
    });
  }
  
  UpdateInfo() {
    if (this.userLogin.user) {
      if (this.userLogin.user.role == 'Team') {
        this.router.navigateByUrl('team/Index/manage-precheck');
        this.userLogin.update(0);
      } else if (this.userLogin.user.role == 'Customer') {
        this.router.navigateByUrl('/manage-packages');
        this.userLogin.update(1);
      } else if (this.userLogin.user.role == 'Admin') {
        this.router.navigateByUrl('admin/Index/manage-pakcage');
        this.userLogin.update(0);
      } else {
        this.userLogin.update(0);
      }
    }
  }
}
