import { Component } from '@angular/core';
import { td } from 'src/app/t1';
@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})

export class C1Component {
dataLocal
tds:td[];
constructor(){
this.dataLocal=localStorage.getItem("dataTodo");
if(this.dataLocal==null){
  this.tds=[]
}
else{
  this.tds=JSON.parse(this.dataLocal)
}
  
}
deleteTodo(obj2:td){
  this.tds.splice(this.tds.indexOf(obj2),1)
  localStorage.setItem("dataTodo",JSON.stringify(this.tds))
}
addTodo(obj3:td){
this.tds.push(obj3)
localStorage.setItem("dataTodo",JSON.stringify(this.tds))
}
togglleTd(obj4:td){
  this.tds[this.tds.indexOf(obj4)].act=!this.tds[this.tds.indexOf(obj4)].act
  localStorage.setItem("dataTodo",JSON.stringify(this.tds))
}
}
