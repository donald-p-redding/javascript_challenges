/*
Write a function that will take in a letter and log a 4 point diamond
to the console

Rules
  - A will always be at the top and the bottom
  - The input letter will represent the widest portion of the diamond
  - There will be spaces in between the chars of each line of the diamond
  - Getting A as an input should just return a single A to the console

Input -> an uppercase letter --> representing the widest/middle
  section of the triangle
Output --> a series of log statements to the console that will 
  print the diamond

Example
  - diamond('C')
    - 5X5 grid
    - internal spaces is always an odd number
    - top and bottom lines of diamond only have on letter char --> A
    - external spaces count down from n...0 as line num approaches the middle
    - each line gets a different letter char
      - A...B...C...input...C...B...A
    - dealing with char codes 

    - num of top lines will be input.charCodeAt(0) - 65
    - halfway till be num of top lines + 1

    - outer spaces will be halfWay - currentLineNum
      - Line 1 --> 2
      - Line 2 --> 1
    
    - internal spaces (except line one)
      - totalCharsPerLine - outerSpace - 2;

    - totalCharsPerLine --> (input.charCodeAt(0) - 65) * 2 + 1

Calc.
  - totalCharPerLine --> (input.charCodeAt(0) - 65) * 2 + 1
  - outerSpaces --> ((input.charCodeAt(0) - 65) + 1) - currentLineNumber
  - internalSpaces --> totalCahrsPerLine - outerSpaces - 2
    - except when the line num === 1
  - halfWayLines --> input.charCodeAt(0) - 65 + 1

Data --> an array of lines --> access to reverse, slice, and join, forEach

Algo
  - if input === A --> log a single A
  - calc. the totalCharsPerLine
  - calc. the halfWay line number
  - set an initial char code to 65 --> currChar
  - iterate from 1 .. halfWay (inclusive) --> represents the line num
    - calc. the outerspaces
    ** If the lineNum === 1 --> push(outerspaces + String.fromCharCode(currChar))
    - calc. the internalSpaces
    push(''.repeat(outspaces) + char + innerspaces + char)

    - increment currChar regardless --> += 1

  - create a bototm portion --> lines.slice(0,-1).reverse();
  - concat the top and the bottom
  - iterate ovet the lines array and log to console
*/  

function diamond(inputChar) {
  if (inputChar === 'A') {
    console.log('A');
    return;
  }

  let lines = [];

  let totalCharsPerLine = (inputChar.charCodeAt(0) - 65) * 2 + 1;
  let halfWay = (inputChar.charCodeAt(0) - 65) + 1;
  let currCharCode = 65;

  for (let lineNum = 1; lineNum <= halfWay; lineNum += 1) {
    let outerSpaces = halfWay - lineNum;
    if (lineNum === 1) {
      lines.push(' '.repeat(outerSpaces) + 'A');
    } else {
      let char = String.fromCharCode(currCharCode);
      let internalSpaces = totalCharsPerLine - (outerSpaces*2) - 2;
      lines.push(' '.repeat(outerSpaces) + char + ' '.repeat(internalSpaces) + char);
    }
    currCharCode += 1;
  }

  let bottomLines = lines.slice(0,-1).reverse();

  lines.concat(bottomLines).forEach(line => console.log(line));
}






diamond('A');
//A

diamond('B');
// A
//B B
// A

diamond('C');
//  A
// B B
//C   C
// B B
//  A

diamond('D');
//   A
//  B B
// C   C
//D     D
// C   C
//  B B
//   A   

diamond('Z');