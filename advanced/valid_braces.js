/*
Write a function that will det. if a string has the correct number of each
type of brace 
  - ()
  - {}
  - []

Rules
  - Input -> a string containing only braces
  - Output -> a bool if the braces all match up and are in the correct order

Def.
  Valid --> a string of braces is valid if all the braces are matched with the correct
  braces

  - braces CAN simply open and close --> can have many open/close braces
  - BEFORE a brace closes --> all inner braces need to be closed properly
  - any brace must begin with an OPEN and END with a close
    - )( --> not valid
    -)[]( --> STILL not valid
    - if we have an open brace -- we MUST see it's compliment

    - SHOULD have a string of open chars that begins to unravel back 
    - with the correct char
      - ([{ | }])
        - open ( [ { 
        - close } ] )
    - closing should be the reversed compliment

    - some sort of compliments function 
          - when char is ( --> ) 

Data - array of open chars that will preserve order can pop off
Algo
 - iterate over each char of the string
   - if the char is an OPEN char --> load it into an array of char
   - if the char is a CLOSE char --> is the last char of the open chars its compliment?
    - if yes -> pop off the open char from the array
    - if no --> return false --> order was NOT preserved

Helpers
 - isBracketCompliment(char1, char2) --> true or false watch out for undefined --> array could be empty 
 - pattern matching for open or close chars
*/

function isCompliment(char, storedBrace) {
  switch(char) {
    case ')': return storedBrace === '(';
    case '}': return storedBrace === '{';
    case ']': return storedBrace === '[';
  }
}

function validBraces(string) {
  let openBraces = [];
  for (let brace of string) {
    let openBracePattern = /[\({\[]/;
    if (openBracePattern.test(brace)) {
      openBraces.push(brace);
      continue;
    }

    if (isCompliment(brace, openBraces[openBraces.length - 1])) {
      openBraces.pop();
    } else {
      return false;
    }
  }
  return true;
}

console.log(validBraces('(){}[]'));             //true

console.log(validBraces('([{}])'));             //true
  //each open and close set is conatined within the outer set

console.log(validBraces('(}'));                  //false
  // ( has no closing partner
  // } has no open partner

console.log(validBraces('[(])'));              //false
  //the parentheses needed to close fully inside of the hard braces
    // expecting to see --> [( ..)] .. it wants the parentheses to clsoe before
      // the hard brace closes

console.log(validBraces('[({})](]'));            //false
  // almost true but the end breaks
    // ( does not have a partner
    // ] does not have an opening partner

console.log(validBraces('()'));               //true

//Edge Cases
console.log(validBraces('{[(())]}'));         //true
  //before you see the closing brace --> all inner braces must be closed

    //closing braces before open
console.log(validBraces(')('));               //false
  //We want an open....close pattern

console.log(validBraces(')[]('));               //false
  //must not pass simply because inner brace passes


