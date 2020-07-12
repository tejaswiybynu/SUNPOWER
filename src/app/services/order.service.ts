import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { HttpClient } from '@angular/common/http';
import { Calculations, EmailData } from '../model/calculations';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  readonly rootUrl='http://localhost:60967/api';
orderData:Order[]=[];
  constructor(private http:HttpClient) { }
  postOrder(formData:Order[]){
    return this.http.post(this.rootUrl+'/Orders',formData);
  }
  sendEmail(email:EmailData){
    return this.http.post(this.rootUrl+'/Email',email);
    

  }
 
}
