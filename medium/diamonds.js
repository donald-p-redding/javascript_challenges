/*
Write a function that will take in an off integer n
and log a 4 pointed diamond to the console.

Rules -
  Input -> 'n' --> an ALWAYS odd int. that will rep. width/height of the diamond
  Output --> undefined --> logging the diamond to the console

  - n will always ne an ODD int

Example
  - n:
    - longest line of the diamond
    - the number of chars on a line

  - char
    - '*' or ' '

  -line
    - mix of spaces and diamond chars
      - total chars is always gonna be n
      - num of stars --> increases by 2 per round
        - starts at 1   
    - outer space count = (n - numStars) / 2

- only need to produce the top and then you can get the bottom by reversing
- elements of the lines array
 
Data --
  array of lines 
    ["  *", "  ***" , "***"]
   - get access to slice

Algo
  - create an empty lines array [];
  - create a starCount var, init. 1;
  - find the halfWay mark Math.floor(n/2); -->2
  - create a middle line --> '*'.repeat(n)

  - create the top half
    - let line = 1
    - line <= halfway
    - ++ linenum

    -numSpaces --> (n - numStars) / 2
    - lines.push(' '.repreat(numSpaces) + '*'.repeat(numStars));
    - numStars += 2;
  
  - once the top is made --> create the bottom
  - bottom = top.reverse();
  -concat all the lines togeather
    top, middle, bottom --> join

  - iterate over the lines and log each line
*/

function diamond(n) {
  let topLines = [];
  let starCount = 1;
  let halfWay = Math.floor(n / 2);
  let middleLine = '*'.repeat(n);

  for (let lineNum = 1; lineNum <= halfWay; lineNum += 1) {
    let outerSpaceCount = (n - starCount) / 2;
    topLines.push(' '.repeat(outerSpaceCount) + '*'.repeat(starCount));
    starCount += 2;
  }

  let bottomLines = topLines.slice().reverse();
  topLines.concat([middleLine], bottomLines).forEach(line => console.log(line));
}

diamond(0);

diamond(1);

// *

diamond(3);

//  *
// ***
//  *

diamond(5);
//   * -- 1
//  *** -- 2
// ***** -- 3
//  *** -- 4
//   * -- 5
diamond(9);

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *