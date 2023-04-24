import { Component } from '@angular/core';

@Component({
  selector: 'app-rect',
  templateUrl: './rect.component.html',
  styleUrls: ['./rect.component.css']
})
export class RectComponent {
  height:number=13;
  width:number=12;
  area:number=0;
  calcArea(): number {
    return this.area=this.height*this.width;
  }

}
