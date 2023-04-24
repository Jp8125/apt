import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { emp } from '../employee/employee.module';
@Component({
  selector: 'app-joining-form',
  templateUrl: './joining-form.component.html',
  styleUrls: ['./joining-form.component.css'],
})
export class JoiningFormComponent {
  list_city=[{name:"Ahmedabad",id:1},{name:"Ghandhinagar",id:2}]
  employees: Array<emp> = [];
  Skills: Array<string> = ['reading','boxing','writing'];
  candidate = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(2)]),
    age: new FormControl("",Validators.required),
    dept: new FormGroup({
      dept_name: new FormControl("",Validators.required),
      dept_head: new FormControl("",Validators.required),
    }),
    gender:new FormControl("",Validators.required),
    address:new FormGroup({
      flat_no: new FormControl("",Validators.required),
      street:new FormControl("",Validators.required),
      city:new FormControl("",Validators.required),
      state:new FormControl("",Validators.required)
    }),
    skills:new FormArray([new FormControl("",Validators.required),new FormControl(),new FormControl()])
  });
  get name() {
    return this.candidate.get('name')?.patchValue('demo value');
  }
  get dept_n() {
    return this.candidate.get('dept');
  }

}
