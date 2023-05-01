import { Injectable } from '@angular/core';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor() { }
  addlog(data:Student){
    console.log("the data is added",data)
  } 
  delete(data:Student){
    console.log("the data is deleted",data)
  } 
  updated(data:Student){
    console.log("the data is updated",data)
  } 
 showlog(){
    console.log("the data is showed")
  } 
  

}
