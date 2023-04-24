import { Component } from '@angular/core';

@Component({
  selector: 'app-area-circle',
  templateUrl: './area-circle.component.html',
  styleUrls: ['./area-circle.component.css']
})
export class AreaCircleComponent {
  radius:number = 10;
  area:number = 0;
  calc_area():number{
     this.area=Math.PI*this.radius*this.radius;
     return this.area;
  }
}
