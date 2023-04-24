import { Component,Input } from '@angular/core';
import { Person } from '../modules/user';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
@Input() p!: Person;
}
