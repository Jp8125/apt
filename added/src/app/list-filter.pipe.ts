import { Pipe, PipeTransform } from '@angular/core';
import { Application } from './Models';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

  transform(array:Array<Application>,value: string): number {
    return array.filter(obj=>obj.address.State==value).length;
  }

}
