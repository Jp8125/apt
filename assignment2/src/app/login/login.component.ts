import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
   uname:string=''
   pwd:string=''
   alrt:string=''
   alrtClass:string=''
   validate(){
      if(this.uname=='admin' && this.pwd=='admin'){
        this.alrt=`hello ${this.uname}`
        this.alrtClass='text-success'
      }
      else
      {
        this.alrt=`either the username or password is incorrect`
        this.alrtClass='text-danger text-center'
      }
   }
}
