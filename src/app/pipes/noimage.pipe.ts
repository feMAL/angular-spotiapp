import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(value: any): any {
    if(!value[0]){
      value= 'assets/img/original.png'
    }else{
      value=value[0].url
    }
    return value;
  }

}
