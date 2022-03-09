/*
Write a function that will look over a list of words
and determine if a word is an anagram of another.
The function should collect/group words that are anagrams of
one another and output them to the console

Rules
 - input --> an array of words
 - output --> a series of log statements that will
  - an array of arrays

  log arrays containing the anagrams of a word we encounter

- no anagrams should still return an empty array

- no duplicated words --> each anagram only shows up once
  --> need to check against already found anagrams for THAT word

-how to collect each group of anagrams cleanly

Data --> obj with an array value
  - the key will be a sorted string --> will be the same if
  - the words are anagrams

Algo
  - create an empty obj --> anagrams
  - iterate over each word of the input array
    - sort the word's chars alphabeteically
    - if the anagram obj key already exixst
      - push the word into the array
    - else
      - create a new key using the 'sorted' ver and init = [word];
    - iterare over the values of the anagram obj and log to the console
*/

function groupAnagrams(words) {
  let anagrams = {};
  words.forEach(word => {
    let objKey = word.split('').sort().join('');
    if (anagrams[objKey]) {
      anagrams[objKey].push(word);
    } else {
      anagrams[objKey] = [word];
    }
  });

  Object.values(anagrams).forEach(array => {
    console.log('-------');
    console.log(array);
  })
}

let words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
          'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
          'flow', 'neon']

console.log(groupAnagrams(words));
//["demo", "dome", "mode"]
//["neon", "none"]
//...

console.log(['dog', 'cat', 'fish']);          //[]