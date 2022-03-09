//Implement encoding and decoding for the rail fence ciper

/*
Write two functions that will allow us to
  -encode strings using the fence cyper method
  -decode previously encoded messages to produce the ACTUAL message


Sounds like we will be dealing with two functions
  -encode(plainText, numOfRails)
  -decode(encodedText, numOfRails)

ENCODED STRING:
  - WECRLTEERDSOEEFEAOCAIVDEN

DECODED MESSAGE:
  -W . . . E . . . C . . . R . . . L . . . T . . . E
  . E . R . D . S . O . E . E . F . E . A . O . C .
  . . A . . . I . . . V . . . D . . . E . . . N . .

The Rail Cipher
  -- ENCODING PROCESS --
  -We imagine a fence that has 3 rails on it
  -Each char of the message is written "downwards" on the next fence UNTIL
    the bottom rail is reached.
  -Once the bottom rail is reached --> the next char is written upwards again
    until the top rail is reached
  -The process of moving up and down creates a zig zag behavior between the
    three rails of our fence.
  -The zig-zag is repeated until all the LETTERS of the message have been encountered

  -- DECODING PROCESS --
  -The enciphered text is allotted rail by rail
    - if the first rail can take 7 chars (function of the input)
      - the first 7 chars are going to be allocated to the top rail in
      the "available spaces"
    - each rail will only have (n) amount of 'available spaces' --> spaces where letters should go
    -other spaces on the rails are simply (.) dots
  -once all the letters of the input are allocated on all the available spaces of the fence rails
  -and the dots are taken into account

  -We will see the TRUE message if we read the message in a zig zag pattern

Definitions
  --FENCE--
    -The fence will ALWAYS have 3 rails
    -The number of avail spaces will:
      -depend on the rail  (top, middle, bottom)
      -be based on the length of the input text --> with spaces or JUST CHARS

Observations
  -USING CAPS --> output should be in caps 
  -When a letter is placed on a rail
    -the other rails get a (.) placed in them --> to preserve the zig-zag look

Questions
  -do we preserve case? --> yes case stays the same on output
  -should we ignore non-letter chars --> we only want letters or numbers

Encode
  -Input: plain text, number of rails to use when enciphering
  -output: the encipered text

  -preserve case
  -if the rail is 1 OR the num. of rails is greater than the num. of letters
    -return the input string

 Data --> arrays

 How to determine the cycle with varying rail numbers
  - [rail0, rail1, rail2, rail3]
    -start by going from index 0 --> index n-1
    -index n-2 --> index 0
  -assume we're gonna be iterating over an array of letter --> looking to allocate them
  -railTurn --> start at 0
  -direction 1
  -railturn increases until it === rails.length - 1
    -at that point direction is NEGATIVE (dir *= -1)
  -works it way back up UNTIL railturn === 0
    -at that point direction is POSITIVE (dir = 1);
  
  -the rail we wanna access would be a result of railturn += direction

//Algo
  -extract all the letters from the input
  -check the rail num for invalid values
    - === 1 || are there more rails than letters --> return the input string
  -generate our rail arrays
    rails = new Array(n).fill([])
  -create a railTurn and init to 0 (first rail)
  -create a dir var and init to positive (1)
  -iterate over the letters array
    - if(railturn = 0) --> dir = 1
    - if (railturn is n-1) --> dir = -1
    rails[railturn].psuh(char)
    railturn += dir

  -reduce all rails into a single array and join the result to return the 
  -encoded string


Decode
  -Input: encoded string of letters and the number of rails that WERE used
  -Output: the plain text string --> all smashed togeather

  -Start of function --> we have a string that represents the rails
    -all joined together
    - rail0  + rail1 + rail2...
    -we need to seperate the string into thair rails again
    and basically 'unwind' them back to their origional order

  -How to divice the chars amongs the number of rails
    -numRails --> 3
    - 'WECRLTEERDSOEEFEAOCAIVDEN'
    - W . . . E . . . C . . . R . . . L . . . T . . . E
      . E . R . D . S . O . E . E . F . E . A . O . C .
      . . A . . . I . . . V . . . D . . . E . . . N . .

    -'WEAREDISCOVEREDFLEEATONCE'  
*/

function generateRails(railNum) {
  let rails = [];
  for (let num = 1; num <= railNum; num += 1) {
    rails.push([]);
  }
  return rails;
}

function encode(plainText, railNum) {
  let letters = plainText.match(/[a-z]/ig);
  if (railNum === 1 || railNum > letters.length) { return plainText };

  let rails = generateRails(railNum);
  let railTurn = 0;
  let direction = 1;

  for (let letter of letters) {
    //creates the zig-zag behavior
    if (railTurn === 0) { direction = 1};
    if (railTurn === rails.length - 1) { direction = -1 };

    rails[railTurn].push(letter);
    railTurn += direction;
  }

  return rails.reduce((prevRails, nextRail) => prevRails.concat(nextRail)).join('');
}

function decode(encodedText, railNum) {

}

//TEST CASES FOR DECODE
//Generic Cases
  //Given Test Case
console.log(decode('XXXXXXXXXOOOOOOOOO', 2));                 //'XOXOXOXOXOXOXOXOXO'
  //Thee rails
console.log(decode('TEITELHDVLSNHDTISEIIEA', 3));           //'THEDEVILISINTHEDETAILS'

//Edge Cases
  //empty string
console.log(decode(''), 4);                                 //''
  //only one rail
console.log(decode('ABCDEFGHIJKLMNOP', 1))                  //''ABCDEFGHIJKLMNOP''


/* TEST CASES FOR ENCODE
//Genric Cases
  //Given test case
console.log(encode('WE ARE DISCOVERED FLEE AT ONCE', 3));             //'WECRLTEERDSOEEFEAOCAIVDEN'
  //Shorter example
console.log(encode('HI THERE', 4));                                   //'HEIRTEH'
  //Preserve case
console.log(encode('Hi There', 4));                                 //'HeirTeh'
  //two rails
  console.log(encode('XOXOXOXOXOXOXOXOXO', 2));                     //'XXXXXXXXXOOOOOOOOO'

//Edge cases
  //only one rail
console.log(encode('One rail, only one rail', 1));                  //'One rail, only one rail'
  //try to encode with more rails than letters
console.log(encode('More rails than letters', 24));                 //'More rails than letters'
*/

