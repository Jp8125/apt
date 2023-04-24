import { Component,Input } from '@angular/core';
import { Person } from '../modules/user';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() data!:Person[]
   object: Person={id:1,name:"ds",reportinghead:"ds",projectmanager:"ds",department:"ds"}
   p:number=0
 forward(val:Person){
    this.object = val;
   this.p = 1
  }

}
  