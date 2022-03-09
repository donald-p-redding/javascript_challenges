/*
Can you build a function that will return true or false if the braces are
in the correct order WHILE dealing with other chars. Some brace chars
can even be escaped.

Rules
  input --> a string that could represent an expression
  output --> bool , does the string adhere to the correct brace syntax?

  In our case ESCAPED chars will be prefixed with '/' char
  This char will not occur any place else other than to escape chars

Def.
  - Braces
    - ()
    - {}
    - []
  - braces don't imediatly have to open and close

  - escape char --> /
    - the / must immedialy prefix another char in order for it to be 'escaped'

  - other chars are not to be factored towards det. if the braces are valid.

Data --> array --> an array of open braces to make sure the seq. is correct
  - if you run into a closing brace --> the last SEEN brace better be the closing
  brace compliment
    - } ... last seen openBrace better be { in order to be the correct syntax

Algo
  - replace the esacpe char with empty string --> we dont' need to consider it
  - create an array to contain open braces
  - iterate over the string
      - if char is an open brace --> store it in the array
      - else if the char is a closing brace
        - if the last seen open brace is the comp. to the close brace
          - remove the last seen open brace --> unwind the seq.
        - else return false
  - return true if we make it out of the loop
  
Helper function
      - isCompliment(closeBrace, openBrace)
        switch(closeBrace)
          case ) : return openBrace === ( ...
          default: retrun false  
 */

function areCompliments(close, open) {
  switch(close) {
    case ')': return open === '(';
    case '}': return open === '{';
    case ']': return open === '[';
    default: return false; 
  }
}

function validBraces(string) {
  let filteredString = string.replace(/\/.?/g, ' ');

  let openBraces = [];

  for (let char of filteredString) {
    let openBrace = /[\({\[]/;
    let closeBrace = /[\)}\]]/;
    
    if (openBrace.test(char)) {
      openBraces.push(char);
    }
    
    if (closeBrace.test(char)) {
      let lastOpenBrace = openBraces.slice(-1)[0];
      if (areCompliments(char, lastOpenBrace)) {
        openBraces.pop();
      } else {
        return false;
      }
    }
  }
  return openBraces.length === 0;
}

//Generic Cases
console.log(validBraces('(a + b)'));        //true

console.log(validBraces('() {} []'));        //true

console.log(validBraces('() {} [] ('));        //false

console.log(validBraces('() {} [] )'));        //false

console.log(validBraces('(a) + (b)'));        //true

console.log(validBraces('({[a]})'));        //true

console.log(validBraces('(/)'));        //false

console.log(validBraces('a + b - (c * d)')); //true

//Edge Cases
console.log(validBraces('/([]/)'));         //true
console.log(validBraces('/(/)'));         //true
  //the braces were escaped and don't actually count as braces

console.log(validBraces('/ () /'));       //true
  //The escape char wasn't used properly --> still valid braces

console.log(validBraces('((((({{{[]}}})))))')); //true

console.log(validBraces(')('));        //false



