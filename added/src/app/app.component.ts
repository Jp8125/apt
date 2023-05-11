import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'question';
  constructor(private serv:DataService,private route:Router){
  }
  get Status(){
    return this.serv.islogin;
  }
  logout(){
    this.serv.islogin=false;
    this.serv.isadmin=false;
    this.route.navigate(['/login']);
  }
}
