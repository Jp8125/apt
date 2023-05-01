import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  Users:Array<User>=[]
  constructor() { }
  addUser(obj:User):void {
    this.Users.push(obj)
    console.log(this.Users)
  }
  getUsers():Array<User>{
    return this.Users
  }
}
