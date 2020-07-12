import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{MatDialogRef} from  '@angular/material';
import { SignUpTeamMemberComponent } from 'src/app/sign-up-team-member/sign-up-team-member.component';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { ManagePackageComponent } from '../manage-package/manage-package.component';
import { ManageUserComponent } from 'src/app/manage-user/manage-user.component';
import { categories } from 'src/app/model/categories';
import { CategoiesService } from 'src/app/services/categoies.service';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  data:Product;
  base64textString:any;
  cat:categories[];
  
  //imgUrl:string="../../../assets/img/sunpower-nobg.png";
  fileToUpload:File=null;
  base64string:any;
  constructor( private router: Router,
    private matDialogRef:MatDialogRef<SignUpTeamMemberComponent>, private service:ProductService,private toastr: ToastrService,
    private catdata :CategoiesService) { }
    ngOnInit() {
     // this.cat=this.catdata.data;
  this.cat=this.catdata.data.filter(x=>x.type==1);
      this.data=this.service.formData
    }
    SignUp(regForm:any){
     this.onClose();
  }
  onClose(){
    this.matDialogRef.close(true);
  }
  hadnlefileinput(file:FileList){
this.fileToUpload=file.item(0);
var render = new FileReader();
render.onload=(event:any)=>{
  this.data.imagUrl=event.target.result;

}
render.readAsDataURL(this.fileToUpload);
let reader1 = new FileReader();
reader1.readAsDataURL(this.fileToUpload);
reader1.onload = (event:any)=> {
  this.base64string = reader1.result;
  
  console.log(this.base64string);
};
reader1.onerror = function (error) {
  //console.log('Error: ', error);
}
  }

  resetFrom(form?:NgForm){
    if(form ==null)
      form.resetForm();
      this.data = {
        id:0,
        type: "" ,
        categories: "" ,
        name: "" ,
        skuId: "" ,
        dailyProductEstimatin: "" ,
        price: 0 ,
        description: "" ,
        imagUrl: "" ,
        file:null
      }
    
    
    
    }
  
  
    getBase64() {

      let reader1 = new FileReader();
      reader1.readAsDataURL(this.fileToUpload);
      reader1.onload = function () {
        //me.modelvalue = reader.result;
        console.log(reader1.result);
      };
      reader1.onerror = function (error) {
        console.log('Error: ', error);
      }
    }
  onSubmit(form:NgForm){
   // const formData= new FormData();
   //formData.append('File',this.fileToUpload,this.fileToUpload.name)
    // console.log(form.value.File)
    if(form.value.Id>0)
    {
           this.updateData(form);
    }else{
      this.insertData(form);
    }
  
  }
  uploadImg(){
    
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(this.fileToUpload);
  }
  insertData(form){
    form.value.ImagUrl=this.base64string
   // this.service.formData=form.value;
   if(this.service.productType=='package'){
    form.value.Type="package";
   }else{
     form.value.Type="component";
   }
      this.service.post(form.value).subscribe(
      res=>{
               this.resetFrom(form); 
               this.toastr.success('Information saved successfully','Register User');
               this.onClose();
      }, 
      err=>{
        console.log(err)
      }
  
    )
  }
  updateData(form:NgForm){
    if(this.base64string){
    form.value.ImagUrl=this.base64string;
    }else{
      form.value.ImagUrl=this.data.imagUrl;
    }
    if(this.service.productType=='package'){
      form.value.Type="package";
     }else{
       form.value.Type="component";
     }
      this.service.put(form.value.Id,form.value).subscribe(
      res=>{
               this.resetFrom(form); 
               this.toastr.success('Information saved successfully','Register User');
               this.onClose();
      }, 
      err=>{
        console.log(err)
      }
  
    )
  }
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
           this.base64textString= btoa(binaryString);
           console.log(btoa(binaryString));
   }
}
