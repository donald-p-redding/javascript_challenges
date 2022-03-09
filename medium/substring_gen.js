/*
Create a function that generates all possible substrigs of a word
 
Rules
  input - a string words
  output - an array of substrings
  
Data --> array (returned obj)

Algo
  -create a substrings array and init to []
  - iterate over each begin index of the word
    - slice from beginIndex .. string.length (inclusive) --> in incremental valus
    - denotes the end index --> endIndex must begin at beginIndex + 1
  - store the progressive slices in the substrings array


  
*/

function substring(string) {
  let substrings = [];
  for (let beginIndex = 0; beginIndex < string.length; beginIndex += 1) {
    for (let endIndex = beginIndex + 1; endIndex <= string.length; endIndex += 1) {
      substrings.push(string.slice(beginIndex, endIndex));
    }
  }
  return substrings;
}

console.log(substring('abc'));        //['a', 'ab', 'abc', 'b', 'bc', 'c']