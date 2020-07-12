import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/Product';
import { Order } from 'src/app/model/order';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/services/order.service';
import { DatePipe } from '@angular/common';
import { NavbarService } from 'src/app/services/navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css'],
  providers: [DatePipe]
})
export class PackagesComponent implements OnInit {
  public type: string = 'Off-Grid Systems';
  cartCounter: number = 0;
  data: Product[];
  orderList: Order[] = [];


  constructor(private cart: CartService, private router: Router, private toaster: ToastrService,
    private service: ProductService, private taster: ToastrService, private orderservice: OrderService,
    private datePipe: DatePipe, private userLogin: NavbarService) { }


  ngOnInit() {
    this.loadData();
    this.orderList = this.orderservice.orderData;
    this.cart.share.subscribe(x => this.cartCounter = x)
  }

  loadData() {
    this.service.get()
      .subscribe(
        x => {
          console.log(this.userLogin.selectedcat);
          if (!this.userLogin.selectedcat) {
            this.userLogin.selectedcat = 'THE CABIN';
          }
          this.data = x.filter(x => x.categories == this.userLogin.selectedcat);
          console.log(this.data)
          if (this.data.length > 0) {
            if (this.data[0].type == 'component') {
              this.type = "System Component";

            }
          }
        });
  }
  Decrement() {
    if (this.cartCounter > 0) {
      this.cartCounter--;
      // this.addtocart();
    }
  }
  Increment() {
    this.cartCounter++;
    //this.addtocart();
  }
  addtocart() {
    this.cart.updateDate(1);
  }
  addToCart(id, price, imgUrl) {
    if (this.userLogin.user == null) {
      this.router.navigate(['/sign-in']);
      this.toaster.info('Please Sign in First.', 'User');
    } else {
      let list = this.orderList.filter(x => x.productId == id);
      if (list.length > 0) {
        this.taster.info('Item already added', 'Shopping');
      } else {
        let customObj = new Order();
        customObj.id = 0;
        customObj.userId = this.userLogin.user.id;
        customObj.productId = id;
        customObj.purchaseDate = this.datePipe.transform(new Date, 'dd-MM-yyyy');
        customObj.quantity = 1;
        customObj.price = price;
        customObj.total = price;
        customObj.image = imgUrl;
        this.orderList.push(customObj);
        this.cartCounter++;
        this.cart.updateDate(this.cartCounter);
        this.orderservice.orderData = this.orderList;
        console.log(this.orderservice.orderData);
        this.taster.success('Item added to cart', 'Shopping');
      }

    }
  }
}