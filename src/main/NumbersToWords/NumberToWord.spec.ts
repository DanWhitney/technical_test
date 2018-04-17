/**
 * Function to unit test the Class TestClass
 * @author D Whitney
 */
import { NumberToWord } from '../NumbersToWords/NumberToWord'

/**
 * This is a comment for "describe".
 */
describe('Test for NumberToWord class', ()=> {
  it('This should convert a number to a word"',()=>{
    
    expect(NumberToWord.NumberConvert(1000)).toEqual('One Thousand');
  })
});