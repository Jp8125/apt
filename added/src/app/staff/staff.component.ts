import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {
  constructor(private name:DataService){

  }
get username(){
  return this.name.user;
}
}
