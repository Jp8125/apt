import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../Models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users!:Array<User>
  uname:string='';
  pass:string='';
constructor(private service:DataService){
  this.service.getdata().subscribe(obj=>this.users=obj.users) 
  this.uname='Reena'
  this.pass='password'
}
login(){
  this.service.verify(this.uname,this.pass);
}
}
