import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { StaffComponent } from './staff/staff.component';
import { AddComponent } from './add/add.component';
import { LsitComponent } from './lsit/lsit.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'staff',component:StaffComponent},
  {path:'add',component:AddComponent,canActivate:[LoginGuard]},
  {path:'list',component:LsitComponent,canActivate:[LoginGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
