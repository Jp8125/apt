import { Component } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { StudentService } from '../services/student.service';
import { dateValidator } from './custom_validators';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
inputForm: FormGroup;
  constructor(private form:FormBuilder,private serv1:StudentService){
  this.inputForm = this.form.group({
   
      name:[''],
      gender:[''],
      address:form.group({
        flat_no:[''],
        street:[''],
        city:[''],
        state:[''],
      }),
      email:[''],
      dob:['',dateValidator],
      Phone:[''],
 
  })

  }
  get form_student(){
    return this.inputForm;
  }
  Submit(){
      this.serv1.addStudent(this.inputForm.value,this.inputForm)
      this.inputForm.reset()
  }
  UpdateVal(){
    console.log(this.inputForm.value)
    this.serv1.updateData(this.inputForm.value)
  }
}
