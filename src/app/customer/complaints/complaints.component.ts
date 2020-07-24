import { Component, OnInit } from '@angular/core';
import{MatDialog,MatDialogConfig} from  '@angular/material';
import { User } from 'src/app/model/User';
import { SignUpTeamMemberComponent } from 'src/app/sign-up-team-member/sign-up-team-member.component';
import { AddPrecheckComponent } from '../add-precheck/add-precheck.component';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  User_DATA: User[] ;
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
