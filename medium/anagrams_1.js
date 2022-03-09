/*
Write a function that will take two strings and determine
if the strings can be considered anagrams of eachother.

Rules
Input - two strings
Output - boolean value

The strings could have spaces --> don't have to be one word
  - ignore spaces
The eval. should be case insensative.
All other chars should be considered towards the eval.

Empty strings should return a false automatically
No arguments should return a false value automatically

Data -- array (sort, forEach, ...) --> array of chars

Algo
  - set our params to default to empty strings if no input
  - create a matching condition
      - match 1 = string.match(/\S/g)
      - match2 = string2.match(/\S/g)
  - if !match || !match2 --> return false --> means we didn't have any chars in a string
  - if the lengths of the matches are not the same --> return false
  -or there were a different number of chars --> can't be anagram by OUR def.
  - sort the arrays in asc. order --> must use char code
l  -iterate via a for... loop to compare chars
    - index = 0; index < chars1.length; ++
    - if chars1[0] !== chars2[0] return false
  - if iteration ends with no early return --> return true
*/

function isAnagram(string1 = '', string2 = '') {
  let pattern = /\S/g;
  let match1 = string1.toLowerCase().match(pattern);
  let match2 = string2.toLowerCase().match(pattern);
  
  if (!match1 || !match2) { 
    return false; 
  }

  if (match1.length !== match2.length) { 
    return false; 
  }

  match1.sort();
  match2.sort();

  for (let index = 0; index < match1.length; index += 1) {
    if (match1[index] !== match2[index]) {
      return false;
    }
  }
  return true;
}

isAnagram('Dormitory', 'dirty room');       //true
isAnagram('School master', 'The classroom');    //true
isAnagram('THEY SEE', 'the eyes');            //true

isAnagram('Stressed', 'Desserts');            //true
isAnagram('Listen', 'Silent');                //true

isAnagram('abc123', '123abc');                //true

isAnagram('Cat', 'dog');                      //false

isAnagram('abc', 'abc-');                     //false

isAnagram('Cat');                             //false

isAnagram('', 'cat');                         //false

isAnagram('cat', '');                         //false

isAnagram('','');                             //false

isAnagram(' ', ' ');                          //false

isAnagram();                                  //false