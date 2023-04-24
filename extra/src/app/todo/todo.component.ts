import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  id:number=0
  task:string=''
  priority:string=''
  tarr:Array<TodoComponent>=[];
  stat:string='complete'
  stat_color:string='btn btn-warning'
  status:string='incomplete'
  dash:string='text-decoration-none'
  add(){
    if(this.task==''&& this.priority==''){
      alert('add task')
    }
    else
    {
      let obj:any={id:this.id,task:this.task,priority:this.priority,status:this.status,stat_color:this.stat_color,stat:this.stat,dash:this.dash}
      this.tarr.push(obj)
      obj={}
     this.task=''
     this.priority=''
     this.id++;
    }
 
  }
  del(id:number){
    if(this.tarr.length==1)
    {
      this.tarr=[]
      this.id=0
    }
    else{
      this.tarr.splice(id,1)

    }
  }
  complete(obj:TodoComponent){
        obj.status='complete'
        obj.stat_color='btn btn-success'
        obj.dash='text-decoration-line-through'
        setTimeout(()=>{this.del(obj.id)},2000)
  }
}
