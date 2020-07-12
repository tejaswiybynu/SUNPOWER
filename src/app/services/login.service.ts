import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../model/Users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly rootUrl='http://localhost:60967/api';
  user:Users;
    constructor(private http:HttpClient) { }
    getUser(email,password){
      return this.http.get<Users>(this.rootUrl+'/Login?email='+email+'&password='+password);
    }
  }
  