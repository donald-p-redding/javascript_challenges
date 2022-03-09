/*
Write a function that will rotate the last n digits of a number

Rules
  -Input --> a number AND a number 'n' representing the last n digits to rotate
  -Output --> the new number created after rotating

  - assume the n is always a positive integer
  - a n === 1 --> just returns the number

Obser.
 - going from right to left with n
 - only rotating the leading digit

 *what happends if n > number of digits in the num?
  --default to the max length?

Algo
  if num === 1 --> return num
  -convert the number into a string --> String(num);
  - have a list of saved digits -- string.slice(0, -num)
  - have a list of digits to rotate --> string.slice(-num..);
  -return parseInt(savedDigits + roate(swapDigits), 10);
*/

function rotateRightMost(number, n) {
  if (n <= 1) { return number };
  let digits = String(number);
  n = n > digits.length ? digits.length : n;

  let savedDigits = digits.slice(0, -n);
  let toSwap = digits.slice(-n);

  return parseInt(savedDigits + rotate(toSwap), 10);
}


function rotate(array) {
  return array.slice(1).concat(array.slice(0,1));
}

console.log(rotateRightMost(735291, 1));        //735291
console.log(rotateRightMost(735291, 2));        //735219
console.log(rotateRightMost(735291, 3));        //735912
console.log(rotateRightMost(735291, 4));        //732915
console.log(rotateRightMost(735291, 5));        //752913
console.log(rotateRightMost(735291, 6));        //352917

//Edge Case
console.log(rotateRightMost(735291, 8));        //352917

