import { Component, EventEmitter, Input, Output} from '@angular/core';
import { td } from 'src/app/t1';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
@Input() t:td;
@Output() todoDel: EventEmitter<td> = new EventEmitter();
@Output() todocheck: EventEmitter<td> = new EventEmitter();
clk(obj:td){
  this.todoDel.emit(obj);
}
check(td){
  this.todocheck.emit(td)
}
}

