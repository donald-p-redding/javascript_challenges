/*
Write a function that will convert a string of words into a single, camel case word.

Rules
  - input - a string of words
  - output - a single 'word' in camel case format

  - function should ignore spaces that may occur before words
    - even at the top of the string

  - digits should not be altered or cause the funciton to crash
  - an empty string should return another empty string

  - can have multiple spaces between input words

  - camel case words should return the same
    - need to run through iteration, but should not be altered

Algo
  - trim the input --> get rid of outer spaces
  - seperate the string into words --> split(/\s+/)
  - map over the array of words --> capitilze it
    - word[0].upcase + rest of the word
  -join all the words with NO spaces
  - return this new string
*/

// function camelCase(string) {
//   let words = string.trim().split(/\s+/);
//   return words.map(word => {
//     if (!word[0]) { return word };

//     return word[0].toUpperCase() + word.slice(1);
//   }).join('');
// }

// console.log(camelCase('hello case'));             //'HelloCase'
// console.log(camelCase('camel case word'));          //'CamelCaseWord'

// console.log(camelCase('test case'));              //'TestCase'

// console.log(camelCase('camel case method'));              //'CamelCaseMethod'

// console.log(camelCase('say hello'));              //'SayHello'

// console.log(camelCase(' camel case word'));              //'CamelCaseWord'

// console.log(camelCase(''));              //''

// //Edge Case
//   // a num was present
// console.log(camelCase('test 1 case'));                //'Test1Case
//   //multiple spaces between words
// console.log(camelCase(' test   case   '));            //'TestCase'
//   //already camel case
// // console.log(camelCase('TestCase'));                   //'TestCase'

String.prototype.camelCase=function() {
    let words = this.valueOf().trim().split(/\s+/);
  return words.map(word => {
    if (!word[0]) { return word };

    return word[0].toUpperCase() + word.slice(1);
  }).join('');
}

'testString'.camelCase();



