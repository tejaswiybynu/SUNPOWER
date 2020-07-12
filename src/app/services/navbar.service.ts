import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Users } from '../model/Users';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  user:Users;
  selectedcat:string;
  private login=new BehaviorSubject<number>(0);
  public customerLogin =this.login.asObservable();
  constructor() { }
  update(val){
    this.login.next(val);
 }
}
