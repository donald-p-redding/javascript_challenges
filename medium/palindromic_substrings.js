/*
Write a function that will generate all possible substrings
of a string AND only return the substrings that are palindromes.

Rules
  - Input --> A string of chars (could have punct or symbol)
  - output -> an array containing only the substrings that are palindroms with
    respect to themselves

  - duplicate palindromes can be included more than omce
  - order of sub str palindromes should appear in the same order they appear in the
    string
  - CASE SENSATIVE
  - consider all chars fair game
  - single chars are NOT palindromes

Data --> array

Def.
Palindrom
  - when a string of chars is the same once it's reversed
    - 'madam' <--REVERSE--> 'madam'
    - MUST HAVE MORE THAN 1 CHAR
-- helper function -- --> isPalindrome(string) --> true or false


Algo
  - generate all the possible substrings of the string --> save in array
  - filer over the array of substrings --> keep only those that are palindromes
    - use the helper function --> truthy vals.
  - return this filtered array
*/

function genAllSubStrings(string) {
  let subStrings = [];
  for (let start = 0; start < string.length; start += 1) {
    for (let end = start + 1; end <= string.length; end += 1) {
      subStrings.push(string.slice(start, end));
    }
  }
  return subStrings;
}

function isPalindrome(string) {
  if (string.length === 1) { return false };

  return string === string.split('').reverse().join('');
}

function palindromes(string) {
  let subStrings  = genAllSubStrings(string);
  return subStrings.filter(subString => isPalindrome(subString));
}

//Generic Cases

console.log(palindromes('abcd'));               //[]
  //None of the substrings gen. will be palindromes

console.log(palindromes('madam'));              //['madam', 'ada']
  // works from left to right --> 2 palindromes 

console.log(palindromes('hello-madam-did-madam-goodbye'));
    //[
//   'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
//   'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
//   '-madam-', 'madam', 'ada', 'oo'
// ]

//Edge Case
  // string has a space char in it
console.log(palindromes('knitting cassettes'));  //['nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt']
  //catch a space char
console.log(palindromes('a a'));                //['a a'];
  //Test char case
console.log(palindromes('aba'));                 //['aba']
console.log(palindromes('Aba'));                //[]

  //Other chars
console.log(palindromes('121'));                             //[121]
  //other chars more complicated
console.log(palindromes('121 121'));                         // [ '121', '121 121', '21 12', '1 1', '121' ] 