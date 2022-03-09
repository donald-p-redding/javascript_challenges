/*
Write a function that will tell if a triangle is eq. iso. or scal.

Input --> 3 numbers of lengths
Output --> a string that cat. the triangle, could have an error message

Rules
  - Triangle:
    - must have 3 sides --> no sides can be 0
    - sum of any two sides MUST be > the final side

  - eq. --> all sides are the same
  - sc. --> all sides have different length
  - iso. --> two sides have the same length


Data -- array of inputs --> sort them 

Algo
  - sort the input by side and divy with array destruct.
    [side1, side2, side3] --> ascending..
  - test to see if working with a triangle
    - [sides].some <= 0 --> fail]
    - side1 + side2 <= side3 --> fail
  
  -- we have a triangle --
   --> filter the sides compare to side2
   ([sides].filter(side --> side ===  side2)) --> case

   if 1 --> scal
   if 2 --> iso
   if 3 --> equ


*/

function kind(...sides) {  
  let [side1, side2, side3] = sides.sort((a, b) => a - b);
  if (side1 + side2 <= side3) { return 'not a triangle' };

  let matchingSides = [side1, side2, side3].filter(side => side === side2).length;

  switch(matchingSides) {
    case 1: return 'scalene';
    case 2: return 'isosceles';
    case 3: return 'equilateral';
  }
}

//Generic Cases

console.log(kind(3,4,5));         //scale
console.log(kind(4,4,6));         //isosceles
console.log(kind(3,3,3));         //equilateral

//Edge Cases
  //sum of two sides does not add up
console.log(kind(1,2,3));       //'fail message'
  //one side has a length of 0
console.log(kind(3,3,0));       //'fail' message
 //one side is neg. num
console.log(kind(3,3,-3));      //fail message

