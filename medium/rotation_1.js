/*
Write a function that will take the first element of an arryay
and rotate it to the end, 

Rules
 - input an array of values
 - output a NEW array where leading elem. has been properly rotated

- can NOT modify the origional input

Data --> Array

Algo
  - slice off the first element of the array
  - save the remaining elements
  - concat the reamaining element on the back side

  -- must return new array
*/

function rotate(array) {
  return array.slice(1).concat(array.slice(0,1));
}

let array1 = [1,2,3,4];
let array2 = ['a', 'b', 'c', 'd'];


//Generic Cases
console.log(rotate(array1));        //[2,3,4,1];
console.log(array1);                //[1,2,3,4]

console.log(rotate(array2));        //['b', 'c', 'd', 'a'];
console.log(array2);                //['a', 'b', 'c' ,'d',]

console.log(rotate([]));             //[]

