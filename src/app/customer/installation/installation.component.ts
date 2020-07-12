import { Component, OnInit } from '@angular/core';
import{MatDialog,MatDialogConfig} from  '@angular/material';
import { User } from 'src/app/model/User';
import { SignUpTeamMemberComponent } from 'src/app/sign-up-team-member/sign-up-team-member.component';
import { AddPrecheckComponent } from '../add-precheck/add-precheck.component';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.css']
})
export class InstallationComponent implements OnInit {
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
    this.dialog.open(AddPrecheckComponent,dialoCgonfig);
    }
}
