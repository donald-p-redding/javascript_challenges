/*
Write a function that will take in a lower case string and will produce
a series of strings that createsa 'wave' seq. of that string.

Rules
  -input -> a ALWAYS lower case string --> can have white space
  -output -> an array containing all variations of the word(s) waved

Def.
  - a 'wave' for a word means to cap the first char
  - then on second iteration cap the second char --> first char goes back to lower case
  - this continues for all chars of the string

  --> 'hello
    - 'Hello'
    - 'hEllo'
    - 'heLlo'
    - 'helLo'
    - 'hellO

- function will always return an array
- the input can be an emty string
- input can be multiple words --> dealing with space chars
  - if it's a space char --> pass over it as if it were an empty sear
    - do NOT include the verion where the space is upper cased
    - no duplicates

Data -- array

Algo
  - create a result array
  - iterate over each char of the string
    - if the char is a space --> skip it
    - let standing = string[index].toUpperCase
    - wave = string.slice(0, index) + standing + string.slice(index+1);
    - push the waveVEr into a result array
  - return the result array

*/

function wave(string) {
  let result = [];
  for (let index = 0; index < string.length; index += 1) {
    let char = string[index].toUpperCase();
    if (/\s/.test(char)) {
      continue;
    } else {
      let waveVer = string.slice(0, index) + char + string.slice(index + 1);
      result.push(waveVer);
    }
  }
  return result;
}

console.log(wave('hello'));       //["Hello", "hEllo", "heLlo", "helLo", "hellO"]

console.log(wave('codewars'));    //["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]

console.log(wave(''));            // []

console.log(wave('two words'));   //["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]

console.log(wave(' gap '));       //[" Gap ", " gAp ", " gaP "]