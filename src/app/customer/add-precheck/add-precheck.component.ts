import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { ActivitiesService } from 'src/app/services/activities.service';
import { UserActivity } from 'src/app/model/UserActivity';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-precheck',
  templateUrl: './add-precheck.component.html',
  styleUrls: ['./add-precheck.component.css']
})
export class AddPrecheckComponent implements OnInit {

  constructor(private matDialogRef:MatDialogRef<AddPrecheckComponent>,private activitiesService:ActivitiesService,private toastr: ToastrService) { }
 //  userActivities:UserActivity;
 public minDate: Date;
 public maxDate: Date;
 public enableButton:boolean;
  ngOnInit() {
    const currentDate = new Date();
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentDate);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }
   onSubmit(regForm:NgForm){
   // console.log(regForm.value);   
       // this.router.navigate(['/sign-in']);
       this.onClose();
    }
    onClose(){
      this.matDialogRef.close(true);
    }
    selectOption(id:number) {
      console.log(this.activitiesService.userActivity.orderId);
      if (this.activitiesService.userActivity.status === 'completed' && this.activitiesService.userActivity.dataType === 'prechecks') {
        this.enableButton = true;
      } else {
      this.enableButton = false;
      }
    }
    addActivity(form:NgForm){
    //  form.value.Role="Team";
    (form.value.Id)
      if(form.value.Id>0)
      {
             this.updateData(form);
      }else{
        this.insertDate(form);
      }
    
    }
    insertDate(form:NgForm){
      this.activitiesService.post(form.value).subscribe(
      res=>{
               //this.resetFrom(form); 
               this.toastr.success('Information saved successfully','Register User');
               this.onClose();
      }, 
      err=>{
        (err)
        // this.toastr.success('Information saved successfully','Register User');
        //        this.onClose();
      }
  
    )
  }
  updateData(form:NgForm){
      this.activitiesService.put(form.value.Id,form.value, true).subscribe(
      res=>{
               //this.resetFrom(form); 
               this.toastr.success('Information saved successfully','Register User');
               this.onClose();
      }, 
      err=>{
       // this.toastr.success('Information saved successfully','Register User');
              // this.onClose();
      }
  
    )
  }
}
