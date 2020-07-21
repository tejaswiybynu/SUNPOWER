import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { OrderService } from '../services/order.service';
import { CartService } from '../customer/Services/cart.service';
import { DailogService } from '../services/dailog.service';
import { ToastrService } from 'ngx-toastr';
import { Order } from '../model/order';
import { CustomerRattingComponent } from '../customer-ratting/customer-ratting.component';
import { Router } from '@angular/router';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartCounter:number=0;
  constructor(private dialog:MatDialog,private orderservice:OrderService,
    private cart:CartService,private myDailog:DailogService,private router:Router,
    private toaster:ToastrService) { }
  displayedColumns: string[] = ['id','firstName', 'lastName', 'email', 'street','actions'];
  dataSource = this.orderservice.orderData;
  ngOnInit() {
    this.dataSource = this.orderservice.orderData;
    this.cart.share.subscribe(x=>this.cartCounter=x);
  }
  Create(){
    if(this.orderservice.orderData.length>0){
    this.orderservice.postOrder(this.orderservice.orderData).subscribe(
      res=>{
              
              

              const dialoCgonfig= new MatDialogConfig();
              dialoCgonfig.disableClose=true;
              dialoCgonfig.autoFocus=true;
              dialoCgonfig.width="60%";
               this.dialog.open(PaymentComponent,dialoCgonfig).beforeClose()
               .subscribe(x=>{
                this.toaster.success('Information saved successfully','Order');
                this.cartCounter=0;
               this.cart.updateDate(this.cartCounter);
               this.orderservice.orderData=[]; 
               this.dataSource = this.orderservice.orderData;
               this.dialog.open(CustomerRattingComponent,dialoCgonfig).beforeClose()
                .subscribe(x=>{
                 this.router.navigate(['/home']);
                });
              });
      }, 
      err=>{
        console.log(err)
      }
    );
    }else{
      this.toaster.info('Cart is empty.','Order Module'); 
    }
  }
    addQuantity(row){
           row.quantity++;
           row.total=row.quantity*row.price;
    }
    subtractQuantity(row:Order){
      if(row.quantity>1){
      row.quantity--;
      row.total=row.quantity*row.price;
      }
}
removeItem(row: Order){
  this.myDailog.openDailogBox('Are you sure to delete this record ?').afterClosed()
  .subscribe(res=>{
    if(res){
      this.orderservice.orderData = this.orderservice.orderData.filter(obj => obj !== row);
      this.dataSource = this.orderservice.orderData;
      this.cartCounter--;
      this.cart.updateDate(this.cartCounter); 
    }
  });
}

}
