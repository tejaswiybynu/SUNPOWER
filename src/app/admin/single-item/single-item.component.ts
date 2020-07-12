import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddItemComponent } from '../add-item/add-item.component';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})
export class SingleItemComponent implements OnInit {
  User_DATA: User[] = [
    {id: 1, firstName: 'SunPower', lastName: 'Noon', email: 'test@hotmail.com',lineAddress:'address1',street:'street1',county:'ludiyana',passowrd:'123',confirmPassword:'123',country:'India',phoneNumber:'0912254125'},
    {id: 2, firstName: 'User1', lastName: 'Morning', email: 'test@hotmail.com',lineAddress:'address1',street:'street1',county:'ludiyana',passowrd:'123',confirmPassword:'123',country:'India',phoneNumber:'0912254125'},
    {id: 3, firstName: 'User1', lastName: 'Noon', email: 'test@hotmail.com',lineAddress:'address1',street:'street1',county:'ludiyana',passowrd:'123',confirmPassword:'123',country:'India',phoneNumber:'0912254125'},
    {id: 4, firstName: 'User1', lastName: 'Evening', email: 'test@hotmail.com',lineAddress:'address1',street:'street1',county:'ludiyana',passowrd:'123',confirmPassword:'123',country:'India',phoneNumber:'0912254125'},
  ];
  constructor(private dialog:MatDialog) { }
  displayedColumns: string[] = ['id','firstName', 'lastName', 'email', 'street','actions'];
  dataSource = this.User_DATA;
  ngOnInit() {
  }
  Create(){
    const dialoCgonfig= new MatDialogConfig();
    dialoCgonfig.disableClose=true;
    dialoCgonfig.autoFocus=true;
    dialoCgonfig.width="60%";
    this.dialog.open(AddItemComponent,dialoCgonfig);
    }
}
