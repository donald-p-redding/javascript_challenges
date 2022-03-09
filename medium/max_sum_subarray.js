/*
Write a function that, given an array of integers --> will return the MAX possible
sum that can be produced by adding contigous ints. togeather.

Rules
  - input --> an array of int. (can be both positive and negative);
  - output --> an int value that represents the max possible sum possible.

  - empty array returns 0
  - if the maxSum is a negative num --> return 0

  - MaxSum could be a single element?

Def.
  Contig. seq.
    - a lot like gen sub strings
    - have start/end index
      - start index stays same for FULL iterations

    - [1, 2, 3]
      - [1]
      - [1,2]
      - [1,2,3]
      - [2]
      - [2,3]
      - [3]

Data --> array of Array
  - store contig. seq. of numbers

Algo
  - if input.lenght < 1 --> return 0
  - create all contig. seq of the input
  - map all seq. of contig. num --> sums --> array of seq. sums.
  - sort the sums in asc.
  - the maxSum --> last element
  - if maxSum < 0 --> return 0
  - else return the maxSum


*/

function contigiousSeq(numberSeq) {
  let result = [];
  for (let start = 0; start < numberSeq.length; start += 1) {
    for (let end = start + 1; end <= numberSeq.length; end += 1) {
      result.push(numberSeq.slice(start, end));
    }
  }
  return result;
}

function maxSequence(numberSeq) {
  if (numberSeq.length < 1) {return 0 };

  let contigSequences = contigiousSeq(numberSeq);
  let contigSums = contigSequences.map(seq => {
    return seq.reduce((total, number) => total + number);
  });

  let maxSum = contigSums.sort((a,b) => a - b).slice(-1)[0];

  return maxSum > 0 ? maxSum : 0;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6

console.log(maxSequence([11]));  //11

console.log(maxSequence([-32]));  //0

console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4])); //12

console.log(maxSequence([10,-1,-2,6,-4]));  //13

// //Edge Cases
console.log(maxSequence([-32, 32]));  //32

// //test all negative elem --> return 0
console.log(maxSequence([-1, -2, -3, -4, -5]));  //0
  //empty array
console.log(maxSequence([])); //0
  //single element is the max
console.log(maxSequence([10, -1, -2, 2, -4])); //10

