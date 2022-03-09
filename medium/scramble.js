/*
Write a function that will det. if a PORTION of str1 can be rearranged 
to form str2

- are all the letters of str2 avail in str1?
  - can not repeat letters from string 1

Assume the input will only be lowercase letters
  - digits
  - punct.

Rules
  - input --> a string of lower case letters
  - output --> bool, are all the letters str2 needs avail in correct quantity

  - each char in str1 can only be counted once
  - not all chars of str1 need to be used

  - if str2 is longer than str1 --> can't happen no matter waht --> return false

  - the order of the chars in string 1 does NOT matter
    - if they're present --> that's all that's needed
    - in the correct quantity

Data --> array of avail. chars (str2) --> splice indexOf

Algo
  - if (str2 > str1) --> return false
  - create an array of chars from str1
  - iterate over each char of str2
    - if the char is avail in the array or chars --> remove the FIRST found instance
    - if the char was NOT avail --> return false
  - return true

*/

function scramble(str1, str2) {
  if (str2.length > str1.length) { return false };

  let availChars = str1.split('');

  for (let char of str2) {
    let charIndex = availChars.indexOf(char);

    if (charIndex === -1) {
      return false;
    }

    availChars.splice(charIndex, 1);
  }

  return true;
}

console.log(scramble('javasss', 'jjss')); // false
  // not enough j's
console.log(scramble('rkqodlw', 'world')); // true
  //enough chars in str1
console.log(scramble('cedewaraaossoqqyt', 'codewars')); // true
  //enough chars in str1
console.log(scramble('katas', 'steak')); // false
  // no 'e' that's needed
console.log(scramble('scriptjava', 'javascript')); // true
  //all necessary letters are avail in str1
console.log(scramble('scriptingjava', 'javascript')); // true
  //all necessart letters are avail

//Edge Case
  //Str2 is greater than str1
console.log(scramble('s', 'sss'));  // false
  //not enough chars to go around

  //same num of char
console.log(scramble('katas', 'steak')); // false
console.log(scramble('ketas', 'steak')); // true

