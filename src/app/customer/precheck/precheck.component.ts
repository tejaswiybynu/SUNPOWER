import { Component, OnInit, ViewChild } from '@angular/core';
import { SignUpTeamMemberComponent } from 'src/app/sign-up-team-member/sign-up-team-member.component';
import { AddPrecheckComponent } from '../add-precheck/add-precheck.component';
import { ActivitiesService } from 'src/app/services/activities.service';
import { Order } from 'src/app/model/order';
import { NavbarService } from 'src/app/services/navbar.service';
import { UserActivity } from 'src/app/model/UserActivity';
import { ToastrService } from 'ngx-toastr';
import { DailogService } from 'src/app/services/dailog.service';
import{MatDialog,MatDialogConfig, MatPaginator, MatTableDataSource} from  '@angular/material';

@Component({
  selector: 'app-precheck',
  templateUrl: './precheck.component.html',
  styleUrls: ['./precheck.component.css']
})
export class PrecheckComponent implements OnInit {
  orders:Order[];
  @ViewChild('PrecheckPaginator',{static: false}) paginator:MatPaginator;
  @ViewChild('InstallationPaginator',{static: false}) paginatorInstallation:MatPaginator;
  @ViewChild('ComplaintsPaginator',{static: false}) paginatorComplaints:MatPaginator;
  constructor(private dialog:MatDialog,private dropdown:ActivitiesService,private nvarbar:NavbarService
    ,private toaster:ToastrService,private myDailog:DailogService) { }
  displayedColumns: string[] = ['id','firstName', 'lastName', 'email', 'street','actions'];
  dataSource : MatTableDataSource<UserActivity>;
  dataSourceInstallation:MatTableDataSource<UserActivity>;
  dataSourceComaplaints:MatTableDataSource<UserActivity>;
  ngOnInit() {
    this.dropdown.get().subscribe(x=>{
      console.log(this.nvarbar.user.id)
      this.dropdown.orders=x.filter(y=>y.userId==this.nvarbar.user.id);
    });
    this.refreshList();

  }

  Create(){
    const dialoCgonfig= new MatDialogConfig();
    dialoCgonfig.disableClose=true;
    dialoCgonfig.autoFocus=true;
    dialoCgonfig.width="60%";
    this.dialog.open(AddPrecheckComponent,dialoCgonfig).beforeClose().subscribe(res=>{
      if(res){
        this.refreshList();
      }
  });
    this.dropdown.userActivity={
      id : 0,
      dataType : "Prechecks",
     activityDate : '',
     timeSlot :  'Morning (9:00 AM - 11:59 PM)',
     comments :  '',
     reschedule :  '',
     status :  'Received',
     userId : this.nvarbar.user.id,
     orderId:this.dropdown.orders[0].id,
     address:'',
     phoneNumber:'',
     firstName:'',
       lastName:'',
    }
    }
   
       CreateInstallation(){
    const dialoCgonfig= new MatDialogConfig();
    dialoCgonfig.disableClose=true;
    dialoCgonfig.autoFocus=true;
    dialoCgonfig.width="60%";
    this.dialog.open(AddPrecheckComponent,dialoCgonfig).beforeClose().subscribe(res=>{
      if(res){
        this.refreshList();
      }
  });
    this.dropdown.userActivity={
      id : 0,
      dataType : "Installation",
     activityDate : '',
     timeSlot :  'Morning (9:00 AM - 11:59 PM)',
     comments :  '',
     reschedule :  '',
     status :  'Received',
     userId : this.nvarbar.user.id,
     orderId:this.dropdown.orders[0].id,
     address:'',
    phoneNumber:'',
    firstName:'',
       lastName:'',
    }
    }
    CreateComplaints(){
      const dialoCgonfig= new MatDialogConfig();
      dialoCgonfig.disableClose=true;
      dialoCgonfig.autoFocus=true;
      dialoCgonfig.width="60%";
      this.dialog.open(AddPrecheckComponent,dialoCgonfig).beforeClose().subscribe(res=>{
        if(res){
          this.refreshList();
        }
    });
      this.dropdown.userActivity={
        id : 0,
        dataType : "Complaints",
       activityDate : '',
       timeSlot :  'Morning (9:00 AM - 11:59 PM)',
       comments :  '',
       reschedule :  '',
       status :  'Received',
       userId : this.nvarbar.user.id,
       orderId:this.dropdown.orders[0].id,
       address:'',
       phoneNumber:'',
       firstName:'',
       lastName:'',
      }
      }
      refreshList(){
        this.dropdown.getUserActivity().subscribe(x=>{
          let t=x.filter(x=>x.dataType=='Prechecks');
          let y=x.filter(x=>x.dataType=='Installation');
          this.dataSource=new MatTableDataSource(t.filter(x=>x.userId==this.nvarbar.user.id));
          this.dataSource.paginator=this.paginator;
          this.dataSourceInstallation=new MatTableDataSource(y.filter(x=>x.userId==this.nvarbar.user.id));
          this.dataSourceInstallation.paginator=this.paginatorInstallation;
          this.dataSourceComaplaints=new MatTableDataSource(x.filter(x=>x.dataType=='Complaints' && x.userId==this.nvarbar.user.id));
          this.dataSourceComaplaints.paginator=this.paginatorComplaints;
        })  
      }
      onDellete(row:UserActivity){
        this.myDailog.openDailogBox('Are you sure to delete this record ?').afterClosed()
        .subscribe(res=>{
          if(res){
                  this.dropdown.delete(row.id).subscribe(
                        res=>{
                                this.toaster.error('Information Deleted successfully','Register User');
                                this.refreshList();
                        }, 
                        err=>{
                          console.log(err)
                        }
                      )
          }
        });

}
onEdit(row:UserActivity){
  this.dropdown.userActivity=Object.assign({},row);
  //console.log(row)
 
  const dialoCgonfig= new MatDialogConfig();
  dialoCgonfig.disableClose=true;
  dialoCgonfig.autoFocus=true;
  dialoCgonfig.width="60%";

  this.dialog.open(AddPrecheckComponent,dialoCgonfig).beforeClose().subscribe(res=>{
    if(res){
      this.refreshList();
    }
});
}
}
