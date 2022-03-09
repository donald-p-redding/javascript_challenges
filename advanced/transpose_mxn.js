/*
Modify our transpose method so that it can handle any MxN matrix

Input --> a two dimensional array
Output --> a two dimensional array where columns are now rows

Rules:
  - the MxN matric will have at least on row and one column
  - the number of elements in each row are the same
    - yes, a matric implies that we wil have a square or rectangle 
  
Observations
  -[[1], [2], [3], [4]] --> number of nested arrays "rows" --> num of columns or 'elements' in an array
    - [1], 0,0
    - [2], 1,0
    - [3], 2,0
    - [4], 3,0
  - the number of elements each nested array has --> 'columns' becomes the number of
    rows it will have --> num of nexted arrays in the transposed array

  - [[1,2,3,4]]


Data - Array

Algo
  - determine the number of 'rows' the return array will have
    - array[0].length --> will be how many nested arrays the 
    return array will needs
  - create loop to FIRST iterate over the current rows of the matrix
    - so long as row < matrix.length
  - create a loop to iterate over the column numbers
    - col < matrix[0].length
    returnArr[col].push(matrix[column][row]])
  -
*/

 function transpose(matrix) {
   let result = [];
   for (let row = 0; row < matrix[0].length; row += 1) {
     result.push([]);
   }

   for (let row = 0; row < matrix.length; row += 1) {
     for (let col = 0; col < matrix[0].length; col += 1) {
       result[col].push(matrix[row][col]);
     }
   }
   console.log(result);
 }

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]] --> one row, four coloumn
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]] --> 4 row one column
transpose([[1]]);                     // [[1]] --> one row on column

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]


