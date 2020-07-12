import { Component, OnInit } from '@angular/core';
import {CartService} from '../Services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartCounter:number;
  constructor(private cart:CartService) { }
   
  ngOnInit() {
    this.cart.share.subscribe(x=>this.cartCounter=x)
  }

}
