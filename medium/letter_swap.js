/*
Write a function that will swap the FIRST char and the LAST char of every word in
a string argument.

Rules
  - input --> a string --> only contains letter chars and spaces (single space)
  - output --> a string --> where first char and last char of each word are swapped

  - case is preserved on the swap
  - single letter don't really swap

  - only letters and space chars

Data - Array --> array of words (map, join..)

Algo
  - seperate the string into an array of words
  - map over each word indiv.
    - if the word is <= 1 char long --> return the word
    - else
      - first char = word[0]
      - last char = word[word.length - 1]
      - rest = word.slice(1, word.length-1);
      -return all of this as a single string
  - join the mapped array with a space delim
*/

function swap(string) {
  let words = string.split(' ');
  return words.map(word => {
    if (word.length <= 1) {
      return word;
    } else {
      return word[word.length - 1] + word.slice(1, word.length - 1) + word[0];
    }
  }).join(' ');
}



console.log(swap('Oh what a wonderful day it is'));         //'hO thaw a londerfuw yad ti si'

console.log(swap('Abcde'));                                 //'ebcdA'

console.log(swap('a'));                                     //'a'


//Edge Case
console.log(swap(''));                                    //'' (empty)

console.log(swap(' '));                                   //'' (empty)
  //['','']