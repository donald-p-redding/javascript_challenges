/*
Write a function that will return the longest prefix shared by a group of strings.
If no prefix is shared --> return an empty string

Rules
  input --> an array of strings 
  output --> a string representing the longest prefix SHARED among all strings

  - all strings will only contain lower case letters
  - can a string be empty?
  - if NO prefix is shared --> return empty string

  - empty input AND no shared prefix --> ''

Def.
  Prefix --> starting at index 0 for every string and making a char-by-char
  comparison

Data - String & array --> every

Algo
  - create a firstWord var and set to [0]
  - all other words can be input.slice(1)
  - create an result var and init. to ''; --> plan to concat matching chars
  - iterate over each char of first word --> WITH INDEX
    - create a char var == string[index];
    - if otherWords all have the same char at the current index
      - result += char
  - return result
*/

function commonPrefix(words) {
  let firstWord = words[0] || '';
  let otherWords = words.slice(1);

  let result = '';

  for (let index = 0; index < firstWord.length; index += 1) {
    let currChar = firstWord[index];
    if (otherWords.every(word => word[index] === currChar)) {
      result += currChar;
    }
  }

  return result;
}

let array = ['flower', 'flow', 'flight'];

//Test Cases
console.log(commonPrefix(array)); //'fl'

console.log(commonPrefix(['dog', 'racecar', 'car'])); //''

console.log(commonPrefix(['interspecies', 'interstellar', 'interstate'])); //'inters'

console.log(commonPrefix(['throne', 'dungeon'])); //''

console.log(commonPrefix(['throne', 'throne'])); //'throne'

console.log(commonPrefix([])) //''

//Edge Cases
  //other words are shorter
console.log(commonPrefix(['aaaa', 'aa', 'a']));     //['a']
  // first word is shorter
console.log(commonPrefix(['a', 'aaaaaaa', 'aaaaaaa']));   //['a']
