import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

    
export class PaymentComponent implements OnInit {
  


  constructor(
    private matDialogRef: MatDialogRef<PaymentComponent>) { }
  data: any;
  public minDate: Date;
 public maxDate: Date;
 
  ngOnInit() {
    const currentDate = new Date();
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentDate);
    this.maxDate = new Date(currentYear + 2, 11, 31);
    this.data = {
      name: "",
      CardNumber: 0,
      Valid: "",
      CVV: 0
    }
  }
onSubmit(){
  this.matDialogRef.close(true);
}
  }