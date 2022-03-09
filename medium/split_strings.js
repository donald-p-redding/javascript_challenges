/*
Write a function that will split a string into pairs and return the pairs
in an array.

Rules
  input - a string of n chars long
  output - an array containing all of the string pairs

  - pairs are made from left to right
  - if the string has an odd num. of chars--> the final "pair"
   should be supplemented with a '_' char
  -an empty string should return an empty array

Data --> array

Algo
  - create a result array and init. to []
  - if the string.length is 0 --> return empty array
  - split the string into pairs of chars
    - create a start --> set to 0
    - slice from start, start + 2
    - increment start += 2
    - push the sliced substring ''pair into the result array
  - map over the resulting pairs -->
    - if the string does NOT have 2 chars --> patten match
      return sring + '_'
    - else just return the string
  - return the result array
*/

function deepEqual(string) {
  let result = [];
  if (string.length === 0) { return result };
  for (let startIdx = 0; startIdx < string.length; startIdx += 2) {
    result.push(string.slice(startIdx, startIdx + 2));
  }
  return result.map(pair => {
    if (!/.{2}/.test(pair)) {
      return pair + '_';
    } else {
      return pair;
    }
  });
}

console.log(deepEqual('abcdef'));       // ['ab', 'cd','ef']

console.log(deepEqual('abcdefg'));      // ['ab', 'cd','ef', 'g_']

console.log(deepEqual(''));             // []