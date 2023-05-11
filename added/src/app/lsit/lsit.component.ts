import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Application, City, State } from '../Models';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lsit',
  templateUrl: './lsit.component.html',
  styleUrls: ['./lsit.component.css']
})
export class LsitComponent {
  apparray: Application[] = []
  appobj: Application = {} as Application
  Application: FormGroup
  id: number = 0;
  statename!: string
  State: Array<State> = [];
  City: Array<City> = [];
  filterCity: Array<City> = [];
  constructor(private getapplications: DataService, private fb: FormBuilder) {
    this.apparray = this.getapplications.applications;
    console.log(this.apparray);
    this.Application=this.fb.group({
      fullname:this.fb.group({
        FirstName:['',[Validators.required]],
        MiddleName:['',[Validators.required]],
        Lastname:['',[Validators.required]],
      }),
      email:['',[Validators.required,Validators.email]],
      address:this.fb.group({
        Building:['',[Validators.required]],
        area:['',[Validators.required]],
        State:['',[Validators.required]],
        City:['',[Validators.required]]
      }),
      gender:['',[Validators.required]],
      Skills:this.fb.array([['',[Validators.required]],['',[Validators.required]]]),
      education:this.fb.group({
        secondary:this.fb.group({
          Marks:['',[Validators.required,Validators.pattern('[0-9]*$'),Validators.max(100),Validators.min(0)]],
          Grade:['',[Validators.required]],
          YearofPassout:['',[Validators.required,Validators.pattern('^[0-9]{4}$'),Validators.maxLength(4),Validators.minLength(4)]]
        }),
        highsecondary:this.fb.group({
          Marks:['',[Validators.required,Validators.pattern('^[0-9]*$'),Validators.max(100),Validators.min(0)]],
          Grade:['',[Validators.required]],
          YearofPassout:['',[Validators.required,Validators.pattern('^[0-9]{4}$')]]
        }),
        Degree:this.fb.group({
          Marks:['',[Validators.required,Validators.pattern('^[0-9]*$'),Validators.max(100),Validators.min(0)]],
          Grade:['',[Validators.required]],
          YearofPassout:['',[Validators.required,Validators.pattern('^[0-9]{4}$')]]
        })
      })
    })
    this.getapplications.getdata().subscribe(data => {this.State=data.States 
      console.log(this.State);
      
      });
      this.getapplications.getdata().subscribe(data => {this.City=data.Cities 
        console.log(this.City);
        });
  }
  delete(id: number) {
    this.apparray.splice(id, 1);
  }
  update(i: number) {
    this.appobj = this.apparray[i];
    console.log(this.apparray[i]);
    this.pushcontrols();
    this.Application.patchValue(this.appobj);
    this.id = i;
    console.log(this.id);
    console.log(this.appobj);
    
  }
  pushcontrols(){
    console.log(this.appobj.Skills.length);
    if(this.Application.value.Skills.length==2){
      for (let i = 0; i < this.appobj.Skills.length-2; i++) {
        
        this.skill.push(new FormControl('', Validators.required));
      }  
    }
  }
  get skill() {
    return this.Application.get('Skills') as FormArray;
  }
  updateval() {
    this.apparray[this.id]=this.Application.value;
    this.getapplications.applications=this.apparray;
    this.apparray = this.getapplications.applications;
  }
  findCity(value: string) {
    console.log(value);
    this.filterCity = this.City.filter(obj => obj.StateID == this.State.find(obj => obj.StateName == value)?.StateID)
  }
  get adminstatus(){
    return this.getapplications.isadmin;
  }
  get name(){
    return this.Application.get('fullname')
  }
  get email(){
    return this.Application.get('email');
  }
  get  address(){
    return this.Application.get('address');
  }
  get education(){
    return this.Application.get('education');
  }
  get fname(){
    return this.name?.get('FirstName')
  }
  get mname(){
    return this.name?.get('MiddleName')
  }
  get lname(){
    return this.name?.get('Lastname')
  }
  get gender(){
    return this.name?.get('gender');
  }
  get addres(){
    return this.Application.get('address');
  }
  get States(){
    return this.addres?.get('State');
  }
  get Cities(){
    return this.addres?.get('City');
  }
  get Area(){
    return this.addres?.get('area');
  }
  get Building(){
    return this.addres?.get('Building');
  }
  get hsc(){
    return this.Application.get('education')?.get('highsecondary');
  }
  get ssc(){
    return this.Application.get('education')?.get('secondary');
  }
  get degree(){
    return this.Application.get('education')?.get('Degree');
  }
  get m(){
    return this.degree?.get('Marks')
  }
  get g(){
    return this.degree?.get('Grade')
  }
  get yp(){
    return this.degree?.get('YearofPassout')
  }
  deleteskl(i:number){
    this.skill.controls.splice(i,1);
  }
  addskil(){
    console.log(this.skill.controls)
    this.skill.controls.push(new FormControl('', Validators.required))
  }
}
