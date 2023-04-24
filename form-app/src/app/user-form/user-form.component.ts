import { Component } from '@angular/core';
import { Person } from '../modules/user';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  id!:number
name!:string
dept!:string
pm!:string
rh!:string
ArrObj:Person[]=[]
check:string=''

add(){
  if(isNaN(this.id)){
    this.check="set"
  }
  else{
    let obj={id:this.id,name:this.name, department:this.dept,projectmanager:this.pm,reportinghead:this.rh}
    this.ArrObj.push(obj)
    this.id++;
    this.name=''
    this.dept=''
    this.pm=''
    this.rh=''
  }

}
}
