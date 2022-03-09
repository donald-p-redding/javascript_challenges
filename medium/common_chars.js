/*
Write a function that will return an array containing all of the common chars
that are shared amongst a list of string inputs.

If a char occurs multiple times in all the strings
  - that char should be included multiple times in the result array
  - example
    - 'bella''label' 'roller' --> l occurs twice in all strings --> [...l, l]
    - the result array must have two elements that have l as a value

Rules
  input -> an array of strings (each with different num of chars)
  output -> an array of chars that are shared amongst all of the strings --> including duplicat chars

  - no common chars should return an empty array
  - the chars can occur in any order
  - ALL strings must have the shared char
  - once a string is matched --> it can not be matched again
    - cool, lock, cook ... --> the 'o' in lock can't count towards
      matching the other 'o''s in cool or cook
  - function seems to take the first word and use that to compare the other chars
    - look at all chars of the first work and remove as matches occue for all
    - subsequent chars

  - input strings will be made up of ONLY lower case chars
    - no empty strings and no other chars to worry about

Data --> array (return & list of chars for each word);

Algo
  - create a return array to house the matching chars
  - create a firstWord var and set to [0]
  - create an array of chars for every word BESIDES the first word
    - wordsChars = [[l,a,b,e,l], [r,o,l,l,e,r] ...]
  - iterate over each char of the FIRST word
    - if the char is found in all other word chars --> helper
    - present in all?
      - add the char to the return array
    - removeChar
      - remove the char (once) from all the other word chars --> need access to indexes for the other arrays

  - return the result array

Helper function
  removeChar(..arrays, charToDelete) {
    arrays.forEach(chars) {
      firstOccurence = chars index of
      chars.splice(firstOccur, 1); --> destructive
    }
  }
*/

function presentInAll(char, otherWords) {
  return otherWords.every(listOfChars => listOfChars.includes(char));
}

function removeChar(char, otherWords) {
  otherWords.forEach(listOfChars => {
    let firstOccur = listOfChars.indexOf(char);
    listOfChars.splice(firstOccur, 1);
  });
}

function commonChars(words) {
  let firstWord = words[0];
  let otherWordsChars = words.slice(1).map(word => word.split(''));

  let result = []
  for (let char of firstWord) {
    if (presentInAll(char, otherWordsChars)) {
      result.push(char);
      removeChar(char, otherWordsChars);
    }
  }
  return result;
}

console.log(commonChars(['bella', 'label', 'roller'])); //['e', 'l', 'l']

console.log(commonChars(['cool', 'lock', 'cook'])); //['c', 'o']

console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])); //['o']

console.log(commonChars(['aabbaaaa', 'ccdddddd', 'ggrrrrr', 'yyyzzz'])); //[]

//Edge Cased
  //test case sensativity
console.log(commonChars(['aaA', 'aaa']));  //[a,a]
