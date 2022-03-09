/*
Write a function that will remove duplicate values ONLY when they
are neighbors within an array.

- we can assume that the values are only primitive type
  - will not be arrays or obj.

Rules
  - input an array of any number of elements
    - will elements all be the same type?
    - what if the array is empty?
    - what if the array only has 1 element?
  - output --> an array where all adj. dup values have been removed
    - is it a NEW array or do we modify?

  - if all inputs are the same --> we want AT LEAST one element remaining
    - may be easier to check at the top

  - what if the input is primitive but NaN?
  - what about null?

  - an empty array as input should return an empty array
    - same of NEW obj? --> NEW

Data -- array
  - be aware of some tricky data types like NaN --> Number.isNaN(value)

Algo
  - if the input is empty --> return the SAME, empty array
  - iterate over the array using it's index
    - if both elements are NaN --> short circut with ||
        - if it's true. slice the element out
        - reset the index to 0 to get a clean loop/resize
        - continue
    - if only one is NaN --> next (can't be equal)
    - else the current value === the next value
      - slice the current index
      - reset index to 0
      - continue
  - return the input after iteration
*/

function removeDup(array) {
  if (array.length < 1) { return array };

  for (let index = 0; index < array.length; ) {
    let currVal = array[index];
    let nextVal = array[index + 1];

    let bothNaN = Number.isNaN(currVal) && Number.isNaN(nextVal);

    if (bothNaN || currVal === nextVal ) {
      array.splice(index, 1);
      index = 0;
      continue;
    }
    index += 1;
  }

  return array;
}

  //dup is at beginning
console.log(removeDup([1,1,2,3]));          //[1,2,3]

  //dup is in the middlr
console.log(removeDup(['a','b','b','c']));  //['a','b','c']

  //dup is at the  end
console.log(removeDup([1,2,3,3]));          //[1,2,3]

console.log(removeDup([1,1]));              //[1]

console.log(removeDup([1]));                // [1]

console.log(removeDup([]));                 // []

//Edge Case
  //what if all inputs are dups?
console.log(removeDup([true, true, true])); //[true]
  //Mixed data types
console.log(removeDup([1,2,false, false, 3]));  //[1,2,false,3]
  //Tricky to compare data type
console.log(removeDup([NaN, NaN]));             //[NaN]

console.log(removeDup([1, NaN, NaN]));          //[1, NaN]
console.log(removeDup([null, null]));           // [null]

