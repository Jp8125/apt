import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
StudentList:Student[]=[]
constructor(private studentMethods:StudentService){
this.StudentList=this.studentMethods.show();
}
delete(id:number){
  this.studentMethods.Delete(id)
}
Update(id:number){
this.studentMethods.updateStudent(id)
}
}
