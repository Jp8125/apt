import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [{path:'',redirectTo:'form',pathMatch:'full'},
{path:'form',component:StudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
