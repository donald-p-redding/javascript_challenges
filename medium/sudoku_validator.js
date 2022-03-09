/*
https://www.codewars.com/kata/529bf0e9bdf7657179000008/train/javascript

Write a function that will take a 2-d array that represents a 9x9 Sudoku board
. The function should be able to validate if the array will represent a valid
Sudoku board.

Rules
  input --> A 2-d array in a 9x9 format. Representing a Sudoku board
  output --> A boolean value validating of the board is valid or not

  - the board will always be in the correct format
  - BUT --> the board COULD contain 0's

Def.
  Valid Board
    - no cells can contain a 0 --> considered empty --> incomplete
    - each row has digits 1-9
    - each columm has digits from 1-9
    - each 'block' (3x3) grid has digits 1-9
  **all conditions must be true**

Data  --> array

Tasks
  - rows is fairly easy to check
  - how to generate columns
  - how to generate the 3x3 boxes

Gen columns:
  - [0][0], [1][0], [2][0], [3][0] ....
  - [0][1], [1][1], [2][1], [3][1]
  - [0][3], [1][2]. [2][2], [3][2]

  - rotate90(array) --> a 9x9 array but the ROWS actually represent the columns of the origional array

Gen blocks
  - Rows
    - while row < board.length
    - if row + 1 % 3 === 0
      - push the block into a larger array --> board[row].slice(colStart, colStart + 3)
      - then increment row += 3
      - continue
    - if row === board.length - 1
      - colStart += 3

  - columns
    - board[row].slice(colStart, colStart + 3)

  do...while (colStart < board[0].length)

One function that will check single array for 1-9
  - rows
  - rotated 90 col
  - blocks in 2-d form


Algo
  - generate the rotated colum array
  - generate the block array
  - create an array with all the 'value sets'
    - probe with every (rows, 90 columns, blocks) --> all 1-d arrays
    - all have validCells
      - no elements are 0 
      - each 1-d array has 1-9 only once
        - local array of int [1..9]
          - iterate over input
            - find indexOf(num)
              if -1 --> return false
              if num --> splice(indexOf, 1);
           - return localarray.length === 0 --> should now be empty

*/

function rotate90(board) {
  let rotated = []

  for (let col = 0; col < board[0].length; col += 1) {
    let line = [];
    for (let row = 0; row < board.length; row += 1) {
      line.push(board[row][col]);
    }
    rotated.push(line);
  }

  return rotated;
}

function parseBlocks(board) {
  let colStart = 0;
  let blocks = [];

  do {
    let line = [];
    for (let index = 0; index < board.length; index += 1) {
      let rowNum = index + 1;
      line = line.concat(board[index].slice(colStart, colStart + 3));

      if (rowNum % 3 === 0) {
        blocks.push(line);
        line = [];
      } 
    }
    colStart += 3;
  } while (colStart < board[0].length);

  return blocks;
}

function validSet(array) {
  let digits = [1,2,3,4,5,6,7,8,9];
  for (let index = 0; index < array.length; index += 1) {
    let number = array[index];
    let digitToDelete = digits.indexOf(number);

    if (digitToDelete < 0) { return false };

    digits.splice(digitToDelete, 1);
  }

  return digits.length === 0;
}

function validSolution(board) {
  let columns = rotate90(board);
  let blocks = parseBlocks(board);

  let allCriteria = board.concat(columns, blocks);

  return allCriteria.every(numberSet => validSet(numberSet));
}

let board1 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

let board2 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
];

console.log(validSolution(board1));     //true

console.log(validSolution(board2));     //false

