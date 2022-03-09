/*
Write a method that will parse through a string an replace the
WORDS (one, two, three...) with their digit counter parts

Rules
  - input --> string (letters, symbols...all chars)
  - output --> similar string (WORD ver. of numbers are replaced with digits)

Def.
  - 'word' --> any chars between word boundaries
    - white space, beginning or end of strings

  - punct. is preserved

  - case insenative

Data -- obj {one: 1, two: 2 ... nine: 9}
Array of words -> map -> join

Algo
  - seperate the string into words
  - map over the array of words
    - 
*/

const WORDS_TO_DIGITS = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};


function word_to_digit(string) {
  let words = string.split(' ');
  let reviseWords = words.map(word => {
    let pattern = /^[a-z]+[!?.,]?$/i.test(word);
    if (!pattern) { return word };

    let letters = word.match(/[a-z]/ig).join('');

    let key = letters.toLowerCase();

    if (Object.keys(WORDS_TO_DIGITS).includes(key)) {
      return word.replace(letters, WORDS_TO_DIGITS[key]);
    } else {
      return word;
    }
  });

  return reviseWords.join(' ');
}


//Test Cases
console.log(word_to_digit('Please call me at five five five one two three four. Thanks.'));
  // 'Please call me at 5 5 5 1 2 3 4. Thanks.'

//Edge Case
  //don't replace pattern if not a word itself
console.log(word_to_digit('Onet twosome threebee four five-times'));
  //'Onet twosome threebee 4 five-times'

console.log(word_to_digit('one! one! one! one?'));
  // 1! 1! 1! 1?

// console.log(word_to_digit('one'));  //1
console.log(word_to_digit('One'));  //1
console.log(word_to_digit('oNe'));  //1
console.log(word_to_digit('ONE'));  //1

  //not technically a number word?
console.log(word_to_digit('-one-'));  //-one-

  //Not a number word
console.log(word_to_digit('one)'));  //one)



