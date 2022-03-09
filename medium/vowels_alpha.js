/*
Write a function that will sort an array of names based on 
how many vowels are in the name. If the number of vowls are the same
the words should then be sorted alphabetically.

The vowel counts should be sorted in DECENDING order
  - meaning that the name(s) with the most vowls should occur first
  - the name with the LEAST number of vowels should occur last

Vowels --> A E I O U

Rules
  - input --> an array of names
  - output --> a new array of names sorted FIRST
    - by the number of vowels each words has
    - then sorted alpabeticall if the vowels are the same

  - the input can be an empty array

  - case does not matter

  - the funciton will always output an array --> could be empty
  - the function shoud NOT modify the origional array
    - musr return new

 - first we sort by the number of vowels each word has
  - in the even two names have the same number of voewels
    - they are then to be sorted alphabetically --> asc.
    
Data --> array

Algo
  - duplicate the array
  - sort the array using a custom function
    - takes two args. name1 and name2
      - downcases the names
      - calls a helper functio to get a vowel count for each word
        - if countA > countB --> return -1
        - if name a > name b --> return 1
        - else return a - b 

*/

function vowelCount(word) {
  let result = word.match(/[aeiou]/g) || [];
  return result.length;
}

function specialSort(names) {
  let result = names.slice();
  result.sort(customSort);


  function customSort(nameA, nameB) {
    let countA = vowelCount(nameA.toLowerCase());
    let countB = vowelCount(nameB.toLowerCase());

    if (countA < countB) {
      return 1;
    } else if (countA > countB) {
      return -1;
    } else {
      alphaSort = [nameA, nameB].sort()[0];
      return alphaSort === nameA ? -1 : 1
    }
  }
  return result;
}


let names1 = [
  'Cooper',
  'Ben',
  'Aron',
]

let names2 = [
  'Cooper',
  'donny',
  'Debby',
  'aron'
]

let names3 = [
  'Randy',
  'Mandy',
  'Steve',
  'Kennedy',
  'Ellington',
  'Kierra',
  'Edwyn'
]

console.log(specialSort(names1));         //['Cooper', 'Aron', 'Ben']

console.log(specialSort(names2));          //[Cooper, aron, Debby, donny]

console.log(specialSort(names3));         //


console.log(specialSort([]));             //[]



