import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { City, State } from '../Models';
import { DataService } from '../data.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  Application!:FormGroup
  statename!:string
  State:Array<State>=[];
  City:Array<City>=[];
  filterCity:Array<City> = [];
  constructor(private fb:FormBuilder,private ds:DataService){
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
    this.ds.getdata().subscribe(data => {this.State=data.States 
    console.log(this.State);
    
    });
    this.ds.getdata().subscribe(data => {this.City=data.Cities 
      console.log(this.City);
      });
  }
  findCity(value:string){
    console.log(value);
    this.filterCity=this.City.filter(obj=>obj.StateID==this.State.find(obj=>obj.StateName==value)?.StateID)
  }
  addskil(){
    console.log(this.skill.controls)
    this.skill.push(new FormControl('', Validators.required))
  }
  get skill(){
    return this.Application.get('Skills') as FormArray;
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
  add(){
    
    this.ds.applications.push(this.Application.value)
    console.log(this.ds.applications);
    console.log(this.Building);
    this.Application.reset();
    
  }
  delete(i:number){
    this.skill.controls.splice(i,1);
  }
}
