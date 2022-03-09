/*
Write a function that will det. if a string input uses each letter of
the alphabet at least once.
  - the function should ignore case AND be able to
  handle other chars than letters
    - numbers, symbols ... etc

Rules
  - input --> a string (can have letters, punct., numbers .. etc)
  - output --> a boolean --> are all letters of the alpha. used at least once

Data - array the rep the alpha. ['a'..'z'] -- splice off values are they're encountered

Algo
  - set string to DEFAULT to '' if no input
  - create a local string --> set to lowercase
  - create local alphabet array with each letter --> downcase
  - iterate over each char of the string input
    - if the char is a letter --> regex matching
      - find the index of the letter --> could be -1
      if indexof > 0 --> remove that letter from the alpha
  - return alpha.length === 0 --> all letters were removed    
*/

function panagram(string = '') {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let localString = string.toLowerCase();

  for (let char of localString) {
    let isLetter = /[a-z]/;
    if (isLetter.test(char)) {
      let alphaIndex = alphabet.indexOf(char);
      if (alphaIndex >= 0 ) {
        alphabet.splice(alphaIndex, 1);
      }
    }
  }
  return alphabet.length === 0;
}

let testString = 'abcdefghijklmnopqrstuvwxyz';

//Generic Cases
console.log(panagram(testString)); // true
console.log(panagram("The quick brown fox jumps over the lazy dog.")); // true
console.log(panagram("This is not a pangram.")); // false

// EdgeCases
  //should only consider letter chars
console.log(panagram('()a-bc? d<>e {}fghi j kl   mn .?opq>:rstu123vwxyz'));  //true
  //uppercase is no problem
console.log(panagram(testString.toUpperCase())); // true
  //empty string
console.log(panagram(''));            //false
  //no input at all
console.log(panagram());              //false        
  //almost but no 'z'
console.log(panagram('abcdefghijklmnopqrstuvwxy'));       //false
