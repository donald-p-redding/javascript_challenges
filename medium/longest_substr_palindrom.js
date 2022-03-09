/*
Find the longest substring in a string that is ALSO a palindrome.
The function should return a char count of the longest substring
that is ALSO a palindrome.

- empty strings should return a 0
- will input ONLY have letters and numbers?
  - possibly have whitespace and other chars?

Rules
  - input --> a string of chars
  - out --> a number that rep. the num of chars of the LONGEST
    - substring that is ALSO a palindrome

Def.
  - a palindrome is a word that will read the same despite being reversed
    -- 'madam' --> 'madam'
    -- '121' --> '121'
    -- '--a--' --> '--a--'
    -- ' a ' --> ' a '

  - a single string will return 1
  - an empty string will return 0

Data --> array of substrings (select filter sort)

Algo
- if the string is empty --> return 0
  - generate ALL possible substrings --> store in an array
  - filter the array to only contain palindromes
  - map over the palindromes array to contain char counts
  - sort the counts in asc. order
  - return the last count.

isPalindrome(string) ..
  return reversed === string

allSubstrings(string)..  
*/

function allSubstrings(string) {
  let subStrings = [];
  for (let start = 0; start < string.length; start += 1) {
    for (let end = start + 1; end <= string.length; end += 1) {
      subStrings.push(string.slice(start, end));
    }
  }
  return subStrings;
}

function isPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  return string === reverse;
}

function longestPalindrome(string) {
  if (string.length === 0) { return 0 };

  let subStrings = allSubstrings(string);
  let palindromes = subStrings.filter(subString => isPalindrome(subString));
  let wordCounts = palindromes.map(word => word.length);

  wordCounts.sort((a, b) => a - b);

  return wordCounts.slice(-1)[0];
}


console.log(longestPalindrome('a'));     //1

console.log(longestPalindrome('aa'));    //2

console.log(longestPalindrome('baa'));     //2

console.log(longestPalindrome('aab'));     //2

console.log(longestPalindrome('baabcd'));    //4

console.log(longestPalindrome('baablkj12345432133d'));  //9

console.log(longestPalindrome(''));    //0

//Edge Cases
console.log(longestPalindrome('121'));    //3

console.log(longestPalindrome('--a--'));    //5

console.log(longestPalindrome(' a  123'));    //3

