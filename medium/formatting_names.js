/*
https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript

FAILED in under 20min


Algo
  - if the array is empty --> return an empty string
  - iterate over the array to map the words as elements
  - gen. a string based on the number of elements
    - if 1 element --> just join the string
    - if 2 elements --> join using ' & '
    - else (3+) elements
      - map over the array of names
        - index = 0 .. length - 2
          - if index === length < 2
            - append a " &" to the element
          - else append a "," to the element
          
Algo
  - if the array is empty --> return ''
  - map over the array of name obj to get the string info
  - join all the elements with a comma and space ', '
  - find the last comma and replace with a ' & remaining string'
*/

// function list(array) {
//   if (array.length === 0) { return '' };
//   names = array.slice().map(obj => obj.name);

//   if (names.length === 1) {
//     return names.join();
//   } else if (names.length === 2) {
//     return names.join(' & ');
//   } else {
//      names =  names.map((name, index, names) => {
//         if (index === names.length - 2) {
//           return name + ' & ';
//         } else if (index < names.length - 1) {
//           return name + ','
//         } else {
//           return name;
//         } 
//       })
//       return names.join(' ');
//   }
// }

function list(array) {
  if (array.length === 0) { return '' };
  let names = array.map(obj => obj.name);
  names = names.join(', ');

  return names.replace(/,([^,]*)$/, ' &$1');
}

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([ {name: ''}, {name: ''} ])
// returns '&'

list([ {name: ''} ])
// returns ''

list([ {name: ''}, {name: ''}, {name: ''} ])
// ',&'

list([])
// returns ''
