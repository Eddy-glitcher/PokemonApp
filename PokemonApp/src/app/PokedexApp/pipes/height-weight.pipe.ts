import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heightWeight'
})
export class HeightWeightPipe implements PipeTransform {

  transform(value: number): string | number {
    if (value > 9) {

      // To convert the value in string and separeate the first and last number
      var valueChanged = value.toString();
      var firstNumber  = valueChanged.slice(0,-1)
      var lastNumber   = valueChanged.slice(-1);

      // To Concatenate the numbers
      var fullNumber = firstNumber + ',' + lastNumber;
      return fullNumber;
    }

    // If the value isn't a number is returned
    return value;

  }

}
