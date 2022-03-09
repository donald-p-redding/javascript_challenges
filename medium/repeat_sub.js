/*
Write a function that will det. if a string input can be formed
by taking one if it's substrings and repeating itself.

Assume that the input will be all lowercase English letters.

Rules
  - input -- string, all lowercase letters
  - output --> bool, can a substring of the string be repreated n amount of times
    to get the same string as the input.

  - the final substring of the first iteration CAN'T be considered
    - the subtr can === the string off the bat

Data --> array of possible substrings --> some

Algo
  - generate all possible substrings
  - probe for ONE substring that can repeat & === the input
    - helper function repeat --> substring, orig string
      - the substring can't equal the string off the bat
  - return substrings.some(...)

canBeRepeated(substring, string)
  - if substr === string --> no good
  - init the repeatstring = substring
  - while the substing length < string length
    - substring += substring.repreat(1)
  - return if repeatString === string  


*/

function genSubstrings(string) {
  let result = [];

  for (let start = 0; start < string.length; start += 1) {
    for (let end = start + 1; end <= string.length; end += 1) {
      result.push(string.slice(start, end));
    }
  }
  return result;
}

function canBeRepeated(substr, string) {
  if (substr === string) { return false };
  let repeatString = substr;
  while (repeatString.length < string.length) {
    repeatString += substr.repeat(1);
  }

  return repeatString === string;
}

function repeatedSubstringPattern(string) {
  let substrings = genSubstrings(string);

  return substrings.some(substr => canBeRepeated(substr, string));
}

console.log(repeatedSubstringPattern('abab')); // true
  // repeat 'ab' twice
console.log(repeatedSubstringPattern('aba')); // false
  // can't be done
console.log(repeatedSubstringPattern('aabaaba')); // false
  // almost --> extra a causes fail
console.log(repeatedSubstringPattern('abaababaab')); // true
  // 'abaab' repreated twice
console.log(repeatedSubstringPattern('abcabcabcabc')); // true
  // 'abc' repreated 4 times

//Edge Cases
console.log(repeatedSubstringPattern('aa'));  //true
  // 'a' --> repreated twice
console.log(repeatedSubstringPattern('a'));  //false
  // 'a' repreated once
console.log(repeatedSubstringPattern('abcdefghijabcdefghij')); //true
  //longer test of substring
console.log(repeatedSubstringPattern('baab')); //false