export class Units {
  static units(count:number):string {
    let units_text = "";
    switch(count) {
        case 1 : 
          units_text = "one";
        break;
        case 2 : 
          units_text = "two";
        break;
        case 3 : 
          units_text = "three";
        break;
        case 4 : 
          units_text = "four";
        break;
        case 5 : 
          units_text = "five";
        break;
        case 6 : 
          units_text = "six";
        break;
        case 7 : 
          units_text = "seven";
        break;
        case 8 : 
          units_text = "eight";
        break;
        case 9 : 
          units_text = "nine";
        break;
      }
      return units_text;
    }
  }