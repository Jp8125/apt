import { Injectable } from '@angular/core';
import { Student } from '../student';
import {FormGroup} from '@angular/forms'
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
   
  students:Array<Student>=[]
  newform!:FormGroup
  tempid!:number
  constructor(private log:LoggerService) { }
  addStudent(std:Student,form:FormGroup){
    this.students.push(std);
    this.newform = form
    this.log.addlog(std)
  }
  Delete(id:number){
    var demo=this.students.splice(id, 1);
    this.log.delete(demo[0])

  }
  show():Array<Student>{
    this.log.showlog()
    return this.students;
  }
updateStudent(id:number){
  console.log(this.newform);
  this.newform.patchValue(this.students[id])
  this.tempid = id

}
updateData(newData:Student){
  this.students[this.tempid]=newData;
  this.log.updated(newData)
}
}
