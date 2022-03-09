//Create a function that will generate all the possible substrings that can be
//generated from a word argument.

//The substrings should all be returned in a one dimensional array and be ordred
//FIRST by which index the substring was generated from and then the LENGTH of each substring
//that was generated at each indexes position.

/*
Input -- string --> word argument.
Output --> an array of all possible substrings ordered specifically.

Questions:
  - what behavior on an empty string?
    - length is  0
    - no chars


Def.
  - 'word' arg. --> no spaces, only a string of chars
  - could have (9,-?) --> consider everything BUT spaces --> 'text moretext'

Oberser.
  - starting and index 0
    - slice --> (0, ++) until length - index
 
Algo
  - create a result array = []
  - create two loops
    - create a loop for the starting index of the slice
      - loop --> 0 - length - 1
    - INTERNALLY loop through the slice amount
      - start at 1
      - end at length - index
    - result.push(index, slice amount)

  - end --> 

  - for( begin = 0; begin < length - 1; ..) {
      for (end = index + 1; end <= (lenght - index); ++end) 
      .. puush
  }
*/

function substrings(string) {
  let results = [];
  for (let begin = 0; begin < string.length; begin += 1) {
    for (let end = begin + 1; end <= string.length; end += 1) {
      results.push(string.slice(begin, end));
    }
  }
  return results;
}



console.log(substrings('abcde'));

console.log(substrings(',.?'));            //[',', ',.', ',.?', '.',  '.?', '?']

console.log(substrings(''));               //[]


// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]