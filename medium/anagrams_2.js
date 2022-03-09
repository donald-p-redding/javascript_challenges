/*
Write a function that will parse through a block of text
and find the number of anagrams present (if any);

Rules:
  - Input --> a block of text
  - Output --> an object that lists the anagrams and number of times it occurs
    in the text
    {dog: 2, cat: 1}

  - if the word does not have an anagram counterpart --> it should not be included in
  the  final object
  - only words that have AT LEAST one anagram should be placed in the return obj.

  - the words are broken up by spaces
    - we will not consider chars of different words to count towards an anagram
    of another
  
  - the function should ignore case and any punct.

  - no repreat anagrams --> bets does NOT get counted twice in sentence 2

Data -> Array --> an array of words
obj -- key first anagram encountered --> value number if times the anagram occurs

Algo
  - create a return anagrams obj --> {}
  - if string.length === 0 --> return obj
  - if /^\s+$/g.test(string) --> return obj
  - seperate the string into an array of words --> string.toLowerCasr()split(' ');
  - map over the words so we we are only dealing with the chars --> no punct
  - iterate over the array of words
    - if the word is already an anagram in the anagrams obj --> skip
      - iterate over remaining words
        - if word === word ...skip
        - if a remainingWord is an anagram of the the word
          - create an key/value pair in anagrams obj --> origional word --> 1
*/

function isAnagram(string1, string2) {
  if (string1.length !== string2.length) { return false };
  let char1 = string1.split('').sort();
  let char2 = string2.split('').sort();

  for (let index = 0; index < char1.length; index += 1) {
    if (char1[index] !== char2[index]) {
      return false;
    }
  }
  return true;
}

function anagramEncountered(obj, word) {
  return Object.keys(obj).some(key => isAnagram(key, word));
}

function anagrams(sentence) {
  if (sentence.length === 0 || /^\s+$/g.test(sentence)) { return {} };
  let words = sentence.toLowerCase().split(' ').map(word => word.replace(/[^a-z]/, ''));
  let obj = {};

  for (let currentWord of words) {
    if (anagramEncountered(obj, currentWord)) { continue; }
    let remainingWords = words.filter(remainingWord => remainingWord != currentWord);
    let matches = remainingWords.filter(remainingWord => isAnagram(remainingWord, currentWord)).length;
    if (matches > 0) {
      obj[currentWord] = matches;
    }
  }
  return obj;
}

let sentence1 = 'The cat can not ACT!';
let sentence2 = 'The best bets are the ones that beat better bets.';
let sentence3 = 'The boss sobs as the tone of the note grew serious.';
let sentence4 = 'Stay alert, or alter the course later.'
let sentence5 = 'The eyes. They see';

console.log(anagrams(sentence1));           //{cat: 1}

console.log(anagrams(sentence2));           //{best: 1}

console.log(anagrams(sentence3));           //{boss: 1, tone: 1}

console.log(anagrams(sentence4));           // {altert: 2}

console.log(anagrams(sentence5));           //{}

console.log(anagrams('This dog ran fast'));     //{};

console.log(anagrams('      '));                //{};

console.log(anagrams(''));                      //{}