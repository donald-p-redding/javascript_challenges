/*
Write a function that takes in an int and will return the NEXT largest
int that can be created using the same digitd as the origional input.

If the input is ALREADY the largest number that can be formed using the digits
  -- the function should return -1

Rules 
  input --> an integer (could have 1 or more digits)
  output --> the NEXT largest number OR 1 (if the input is already the largest)

  - if the input is a single digit --> -1
  - when two digits --> try to swap digits?
  - swapping would be too messy

Data - an string version of digits --> easier to compare equality

Algo
  - let the nextLagest initially be the input
  - create a loop so long as the inputs digits are the same as nextlargest digits --> string
  - increment the nextLargest
  - if sameDigits(input, nextLargest) --> return nextLargest
  - else keep incrementing nextLargest --> it will eventually becomes too large

  return -1

*/

function sameDigits(num1, num2) {
  let digits1 = String(num1).split('').sort().join('');
  let digits2 = String(num2).split('').sort().join('');

  return digits1 === digits2;
}

function nextBiggerNumber(number) {
  let nextLargest = number;
  while (String(nextLargest).length === String(number).length) {
    nextLargest += 1;
    if (sameDigits(nextLargest, number)) {
      return nextLargest;
    }
  }
  return -1;
}

//Test Casex

console.log(nextBiggerNumber(9)); //-1
  //can't make a larger num with a single digit
console.log(nextBiggerNumber(12)); // 21
  //swapped the two digits 
console.log(nextBiggerNumber(513)); // 531
  //swapped the last two digits
console.log(nextBiggerNumber(2017)); // 2071
  //swapped the last two digits
console.log(nextBiggerNumber(111)); // -1
  //all digits are the same --> can't make a larger number
console.log(nextBiggerNumber(531)); // -1
  //no swapping will result in a larger number
console.log(nextBiggerNumber(123456789)); // 123456798
  //ended up swapping the last two digits
console.log(nextBiggerNumber(2071)); // 2107
  //last two digits swap did NOT make a larger number
  //swapped the 2nd and the last digit
console.log(nextBiggerNumber(576)); // 657
  // swapped the fitst and last digits
console.log(nextBiggerNumber(10)); // -1
  // 01 is not larger than 10 --> return -1
console.log(nextBiggerNumber(893)); // 938
  //swapped all digits