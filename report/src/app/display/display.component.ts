import { Component,Input } from '@angular/core';
import { St_report } from '../modules/marks';
import { Subject } from '../modules/sub';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
@Input() data!:St_report
val!:number

}
