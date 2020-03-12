import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: Array<any>, ...args: any[]): any {
    let image = (images.length <= 0 || !images) ? 'assets/img/noimage.png' : images[0].url ;
    return image;
  }
}
