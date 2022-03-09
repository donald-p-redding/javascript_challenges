/*
Given two strands of DNA --> can you calc. the hamming distance between
the two strands.

Rules
Input --> two strands of DNA --> two string words.
Output --> number --> the hamming dist. between two strands of DNA

  - DNA can be different lengths
    - if this happens --> check hamming ditance of the shorter one
      -- AAB| 
      -- AAB|CS
Hamming distance
  - check each char at each dna strand --> if they match --> don't count towards
  hamming distance
  - if they dont' match --> the hamming distance increased by one


Data --> array --> destruct
String -- going index by index

Algo
  - create a hammingsdst var and init to 0
  - sort the input by char length
    [short, long] --> args.sort()
  - iterate over the index 0 --> short.length - 1
    - if short[index] !== long[index] --> hammingdist +=1 
  - return hamming dis
*/

function hammingDist(...DNA) {
  let [short, long] = DNA.sort((a, b) => a.length - b.length);

  let hammingDist = 0;
  for (let index = 0; index < short.length; index += 1) {
    if (short[index] !== long[index]) {
      hammingDist += 1;
    }
  }
  return hammingDist;
}



console.log(hammingDist('GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT'));      //7

  //no difference
console.log(hammingDist('GAGCCTACTAACGGGAT', 'GAGCCTACTAACGGGAT'));     //0

  //smaller string
console.log(hammingDist('AAB', 'AACCS'));     //1
console.log(hammingDist('AACCS', 'AAB'));     //1

  //no input for a strand
console.log(hammingDist('AABCAA', 'AACDAA'));   //2    