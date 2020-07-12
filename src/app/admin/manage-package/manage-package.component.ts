import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatTableDataSource } from '@angular/material';
import { User } from 'src/app/model/User';
import { AddItemComponent } from '../add-item/add-item.component';
import { SignUpTeamMemberComponent } from 'src/app/sign-up-team-member/sign-up-team-member.component';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { DailogService } from 'src/app/services/dailog.service';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';
import { RouterEvent, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-manage-package',
  templateUrl: './manage-package.component.html',
  styleUrls: ['./manage-package.component.css']
})
export class ManagePackageComponent implements OnInit {
  product:Product[];

  constructor(private router:Router ,private dialog:MatDialog,private service: ProductService,private toaster:ToastrService,private myDailog:DailogService) { }
  displayedColumns: string[] = ['id','firstName', 'lastName', 'email', 'street','actions'];
  dataSource : MatTableDataSource<Product>;
  @ViewChild(MatPaginator,{static: false}) paginator:MatPaginator;
 
  ngOnInit() {
    // this.router.events.pipe(
    //   filter((event: RouterEvent) => event instanceof NavigationEnd)
    // ).subscribe(() => {
    //   this.loadData();
    // });
    this.loadData();
    // this.service.refreshList();
    //       this.dataSource=new MatTableDataSource(this.service.list) ;
    //     this.dataSource.paginator=this.paginator;

  }
  loadData(){
    this.service.get()
    .subscribe(
      x=>
      {
       
        if(this.service.productType=='package'){
          this.dataSource=new MatTableDataSource(x.filter(x=>x.type=="package")); 
          console.log(x.filter(x=>x.type="package"))
         }else{
          this.dataSource=new MatTableDataSource(x.filter(x=>x.type=="component")) 
          console.log(x.filter(x=>x.type="component"))
         }
        //this.dataSource=new MatTableDataSource(x) ;
        this.dataSource.paginator=this.paginator;
      });
  }
  Create(){
    
    const dialoCgonfig= new MatDialogConfig();
    dialoCgonfig.disableClose=true;
    dialoCgonfig.autoFocus=true;
    dialoCgonfig.width="60%";
   
    this.dialog.open(AddItemComponent,dialoCgonfig).beforeClose().subscribe(res=>{
      if(res){
        this.loadData();
      }
  });
    this.service.formData = {
      id:0,
      type: "" ,
      categories: "THE CABIN" ,
      name: "" ,
      skuId: "" ,
      dailyProductEstimatin: "" ,
      price: 0 ,
      description: "" ,
      imagUrl: "../../../assets/img/sunpower-nobg.png" ,
      file:null
    }
    }
    onEdit(row:Product){
      this.service.formData=Object.assign({},row);
      const dialoCgonfig= new MatDialogConfig();
      dialoCgonfig.disableClose=true;
      dialoCgonfig.autoFocus=true;
      dialoCgonfig.width="60%";
  
      this.dialog.open(AddItemComponent,dialoCgonfig).beforeClose().subscribe(res=>{
        if(res){
          this.loadData();
        }
    })
  }
    onDellete(row:Product){
              this.myDailog.openDailogBox('Are you sure to delete this record ?').afterClosed()
              .subscribe(res=>{
                if(res){
                        this.service.delete(row.id).subscribe(
                              res=>{
                                      this.loadData();
                                      this.toaster.error('Information Deleted successfully','Register User');
                              }, 
                              err=>{
                                console.log(err)
                              }
                            )
                }
              });
   
    }

}
