import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application, Main, State, User } from './Models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  isadmin:boolean=false
  states:Array<State>=[]
  users:Array<User>=[]
  applications:Array<Application>=[]
  islogin:boolean=false;
  user:string=""
  constructor(private http:HttpClient,private router:Router) { }
  getdata(){
   return this.http.get<Main>('./assets/data.json')
  }
  findState(){
    this.getdata().subscribe((data)=>{
    this.states=data.States
    });
  }
  verify(username:string,password:string){
      this.getdata().subscribe((obj)=>  
        {
          if(obj.users.find(u=>(u.userName==username && u.password==password))!=undefined){
            console.log(obj.users.find(u=>(u.userName==username&&u.password==password)));
            if(obj.users.find(u=>(u.userName==username&&u.password==password))?.role=='admin')
            {
              this.islogin=true;
              this.router.navigate(['/admin'])
              this.isadmin=true;
            }
            else if(obj.users.find(u=>(u.userName==username&&u.password==password))?.role=='staff'){
              this.islogin=true;
              this.router.navigate(['/staff'])
              this.user=username;
            }
          
          } 
          else{
            alert("enter valid username or password");
            this.router.navigate(['/login']);
          }
       } )
  }
 
}
