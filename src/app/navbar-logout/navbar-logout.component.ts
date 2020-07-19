import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { Router } from '@angular/router';
import { CartService } from '../customer/Services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { categories } from '../model/categories';
import { CategoiesService } from '../services/categoies.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-navbar-logout',
  templateUrl: './navbar-logout.component.html',
  styleUrls: ['./navbar-logout.component.css']
})
export class NavbarLogoutComponent implements OnInit {
  cartCounter:number;
  cat:categories[];
  constructor(private router:Router,private userLogin:NavbarService,
    private cart:CartService,private toaster:ToastrService,private orderservice:OrderService,
     private catdata :CategoiesService ) { }
  login:number;
  ngOnInit() {
    this.userLogin.customerLogin.subscribe(x=>this.login=x);
    this.cart.share.subscribe(x=>this.cartCounter=x);
    this.cat=this.catdata.data;
  }
  logout(){
    this.userLogin.update(0);
    this.userLogin.user=null;
    //this.cart.share.subscribe(x=>this.cartCounter=0);
    //this.catdata.data=null;
    this.cart.updateDate(0);
    this.orderservice.orderData=[];
    this.router.navigateByUrl('/home');
  }

  public updateUser() {
    this.router.navigate(['/sign-up-customer']);
  }
  loadComponent(componentType:string){
    this.userLogin.selectedcat=componentType;
    if(this.userLogin.user ==null && componentType=="appointments"){
      this.router.navigate(['/sign-in']);
      this.toaster.info('Please Sign in First.','User');
    }else{
      if(componentType=="appointments"){
        this.router.navigateByUrl('/manage-precheck');
      }else{
        this.router.navigateByUrl('/manage-precheck', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/manage-packages']);
       
       }); 
      }
      // this.service.productType='component'; 
    }
  }

}
