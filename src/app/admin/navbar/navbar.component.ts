import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private service:ProductService,private userLogin:NavbarService) { }

  ngOnInit() {
  }
  loadComponent(componentType:string){
    if(componentType=='gridsystem'){
      this.service.productType='package';
      this.router.navigate(['/admin/manage-pakcage']);
    }else{
      this.service.productType='component'; 
      this.router.navigate(['/admin/manage-components']);
    }
  }
  logout(){
    this.userLogin.update(0);
    this.userLogin.user=null;
    this.router.navigateByUrl('/home');
  }
}
