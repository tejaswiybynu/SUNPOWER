import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import{MatDialog,MatDialogConfig} from  '@angular/material';
import { User } from 'src/app/model/User';
import { Users } from 'src/app/model/Users';
import { SignUpTeamMemberComponent } from 'src/app/sign-up-team-member/sign-up-team-member.component';
import { WebApisService } from '../../services/web-apis.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { DailogService } from 'src/app/services/dailog.service';
@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export  class ManageUserComponent implements OnInit {
  users:Users[];


  constructor(private dialog:MatDialog,private webAPI:WebApisService,private service: UserService,private toaster:ToastrService,private myDailog:DailogService) { }
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'address','phoneNumber','actions'];
  dataSource : MatTableDataSource<Users>;
  @ViewChild(MatPaginator,{static: false}) paginator:MatPaginator;
  ngOnInit() {
    this.loadData();
    // this.service.refreshList();
    //       this.dataSource=new MatTableDataSource(this.service.list) ;
    //     this.dataSource.paginator=this.paginator;

  }
  Create(){
    
    const dialoCgonfig= new MatDialogConfig();
    dialoCgonfig.disableClose=true;
    dialoCgonfig.autoFocus=true;
    dialoCgonfig.width="60%";

    this.dialog.open(SignUpTeamMemberComponent,dialoCgonfig).beforeClose().subscribe(res=>{
      if(res){
        this.loadData();
      }
  });
    this.service.formData = {
      id:0,
      firstName: "",
      lastName: "",
      email: "",
      address:"",
      phoneNumber:"",
      role:"Admin",
      password:""
    }
    }
    onEdit(row:Users){
      this.service.formData=Object.assign({},row);
      //console.log(row)
     
      const dialoCgonfig= new MatDialogConfig();
      dialoCgonfig.disableClose=true;
      dialoCgonfig.autoFocus=true;
      dialoCgonfig.width="60%";
  
      this.dialog.open(SignUpTeamMemberComponent,dialoCgonfig).beforeClose().subscribe(res=>{
        if(res){
          this.loadData();
        }
    })
    }
    onDellete(row:Users){
              this.myDailog.openDailogBox('Are you sure to delete this record ?').afterClosed()
              .subscribe(res=>{
                if(res){
                        this.service.deleteUser(row.id).subscribe(
                              res=>{
                                      this.toaster.error('Information Deleted successfully','Register User');
                                      this.loadData();
                              }, 
                              err=>{
                                console.log(err)
                              }
                            )
                }
              });
   
    }
    loadData(){
      this.service.getUser()
    .subscribe(
      x=>
      {
        this.users=x.filter(y=>y.role=='Team');
        this.dataSource=new MatTableDataSource(x.filter(y=>y.role=='Team')) ;
        this.dataSource.paginator=this.paginator;
      });
    }
}
