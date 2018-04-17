export class Tens {
  static tens(count:number):string {
    let tens_text = "";
    switch(count) {
        case 1 : 
          tens_text = "ten";
        break;
        case 2 : 
          tens_text = "twenty";
        break;
        case 3 : 
          tens_text = "thirty";
        break;
        case 4 : 
          tens_text = "forty";
        break;
        case 5 : 
          tens_text = "fifty";
        break;
        case 6 : 
          tens_text = "sixty";
        break;
        case 7 : 
          tens_text = "seventy";
        break;
        case 8 : 
          tens_text = "eighty";
        break;
        case 9 : 
          tens_text = "ninety";
        break;
        case 0 : 
        tens_text = "";
        break;
      }
      return tens_text;
    }
  }
