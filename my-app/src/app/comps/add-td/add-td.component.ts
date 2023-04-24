import { Component ,Output,EventEmitter} from '@angular/core';
import { td } from 'src/app/t1';

@Component({
  selector: 'app-add-td',
  templateUrl: './add-td.component.html',
  styleUrls: ['./add-td.component.css']
})

export class AddTdComponent {
  @Output() todoAdd: EventEmitter<td> = new EventEmitter();
  title:string
  description:string
   sub(){
  const todo={
    no:0,
    ttl:this.title
    ,des:this.description
    ,act:true
  }
  this.todoAdd.emit(todo);
}
}
