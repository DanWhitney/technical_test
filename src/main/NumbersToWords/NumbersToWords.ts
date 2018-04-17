import {NumberToWord} from './NumberToWord'

export class NumbersToWords {

    from: number;

    to: number;

    constructor(from: number, to:number) {
      this.from = from;
      this.to = to;
    }

    printCount() {
      //loop through numbers in the range given
      for(let currentNumber = this.from; currentNumber <= this.to; currentNumber++ ) {
        console.log(currentNumber + ":= "  + NumberToWord.NumberConvert(currentNumber));
      }
    }
}