/*
Given a number --> take the sum of the digits that compose the number
If that value has more than one digit --> repreat the process on the new value
UNTIL the result is a single, positive digit.

Rules
  - input -> a number (could be 1..n digits)
  -output -> a number --> a single, positive digit || a string error message

  - if the input is <= 0 --> return error message
  - if the input is a float --> only deal with the int. portion --> left of decimal
  - should be able to handle 00

Data
  - string --> to get digits
  - array --> to iterate and sum the digits
  - number --> potential return value type

Algo
  - default the number to 0 if no arg. is passed.
  - if number <= 0 --> return error message.
  - number = parseInt(number, 10); --> get only the int value
  - convert the number into it's string version --> digits
  - map over digits array to get the int. ver. of each digit
  - sum all of the digits
    - if result > 9 --> return digital_root(result) --> recursive
    - else return the result
*/

function digital_root(number = 0) {
  if (number <= 0) { return 0 };
  number = parseInt(number, 10);
  let digits = String(number).split('').map(digit => Number(digit));

  let result = digits.reduce((sum, currVal) => sum + currVal);

  if (result > 9) {
    return digital_root(result);
  } else {
    return result;
  }
}

//Generic Cases
console.log(digital_root(16));        //7
console.log(digital_root(456));       //6
console.log(digital_root(493193));     //2
console.log(digital_root(1));         //1

//Edge Cases
  //Invalid input
console.log(digital_root(-1));        // 'An error has occured'
  //Zero or -0 as an input
console.log(digital_root(0));         // 'An error has occured'
console.log(digital_root(-0));         // 'An error has occured'

  //double zero
console.log(digital_root(00));         // 'An error has occured'

  //No input is supplied
console.log(digital_root());           // 'An error has occured'

  //Check parsing properly
console.log(digital_root(01));        //'1'

  //Float
console.log(digital_root(1.1));       // '1'
console.log(digital_root(10.1));      // '1' --> 1 + 0 -->1