import {Tens} from './Tens';
import {Units} from './Units';

export class NumberToWord {

  static NumberConvert(count: number):string {
    let output:string = "" 
    //convert the number into thounsands hundreds tens and units 

    let thousands: number = +count.toString().split("").reverse().join("")[3]; //
    let hundreds: number = +count.toString().split("").reverse().join("")[2];
    let tens:number = +count.toString().split("").reverse().join("")[1];
    let units: number = +count.toString().split("").reverse().join("")[0];

    let tens_and_units = (tens *10) + units;

  //  console.log("thousands =" + thousands);
  //  console.log("hundreds =" + hundreds);
  //  console.log("tens =" + tens);
  //  console.log("units =" + units);

    // handle the tens and units
    let tens_and_units_text:string ="";
    if (tens_and_units >=11 && tens_and_units <= 19) {
      // 11 through to 19
      switch(tens_and_units) {
        case 11 : 
          tens_and_units_text = "eleven";
        break;
        case 12 : 
          tens_and_units_text = "twelve";
        break;
        case 13 : 
          tens_and_units_text = "thirteen";
        break;
        case 14 : 
          tens_and_units_text = "fourteen";
        break;
        case 15 : 
        tens_and_units_text = "fifteen";
        break;
        case 16 : 
        tens_and_units_text = "sixteen";
        break;
        case 17 : 
        tens_and_units_text = "seventeen";
        break;
        case 18 : 
        tens_and_units_text = "eighteen";
        break;
        case 19 : 
        tens_and_units_text = "nineteen";
        break;
      }
    }
    else {
      // all the rest in tens and units
      tens_and_units_text = Tens.tens(tens) + " " + Units.units(units);
    }

    //handling the hundreds
    let hundreds_text:string = "";
    if (hundreds >= 1) {
      hundreds_text = Units.units(hundreds) + " hundred";
    }

    //handling the 'and'
    if(hundreds > 0) {
        if (tens > 0 || units > 0 ) {
          output = hundreds_text + " and " + tens_and_units_text;
        }
        else {
          output = hundreds_text ;
        }
      }
      else {
        output = tens_and_units_text;
    }

    //handling the thousands
    let thousands_text:string = "";
    if (thousands >= 1) {
      thousands_text = Units.units(hundreds) + " thousand";
    }
    
    //handling the comma
    if(thousands >=1 && hundreds>=1 ) {
      //add the comma
      output = thousands_text + ", " + output;
    }

    return output;
  }
}