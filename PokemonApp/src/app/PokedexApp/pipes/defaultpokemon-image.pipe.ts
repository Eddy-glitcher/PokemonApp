import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultpokemonImage'
})
export class DefaultpokemonImagePipe implements PipeTransform {

  transform(image: string): string {
    if (image == null) {
      return '../../../assets/img/pokeball.png';
    }
    return image;
  }

}
