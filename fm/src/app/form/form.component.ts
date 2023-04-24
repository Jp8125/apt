import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  demoforms:FormGroup= new FormGroup({
    name : new FormControl(''),
    age: new FormControl(''),
    value: new FormControl('')
  })

}