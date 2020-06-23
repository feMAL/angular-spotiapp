import { Pipe, PipeTransform } from '@angular/core';
import {  DomSanitizer } from '@angular/platform-browser'

@Pipe({
  name: 'urlnonsafe'
})
export class UrlnonsafePipe implements PipeTransform {

  constructor(private _sanitizer:DomSanitizer ){}

  transform(value: string, url:string): any {
    console.log(url+value)
    return this._sanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
