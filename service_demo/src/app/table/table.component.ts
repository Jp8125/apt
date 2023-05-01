import { Component } from '@angular/core';
import { User } from '../interface/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  details:Array<User>=[]
constructor(private getdaata:UserService){
  this.details=getdaata.getUsers()
}

}
