/*
Given a list of directions. Filter out the directions that will
end up canceling each other out --> only return the directions that matter

Rules
  - input --> an array of string directions words [NORTH, SOUTH ..]
  - output --> an array of strings where only the relecant dir. remain --> even an empty one

  - not all directions will be able to be reduced.
    - [NORTH WEST SOUTH EAST] can not be reduced
    - we must only cancel DIRECT opposites

- opposites do NOT have to come right after the other
  - if two dir in between cancel --> you still asess the prev dir against the new one
    - see test case 1

- may iterate over dir multiple times 

- ALWAYS return at least an empty array

- make a helper that will iterate once and remove 'compliments' that are direct

- need a way to restart the loop

Data --> array

Algo
  - iterate over dir.
    - dir and its imediat dir are comp. -> remove them --> start iteration over
    - resize with splice --> index, index + 1
      - reset index = 0;
  - return the final dir
  
Helper isCompliment(dir1, dir2)
  swtich ...
*/

function areCompliments(dir1, dir2) {
  switch(dir1) {
    case 'NORTH': return dir2 === 'SOUTH';
    case 'SOUTH': return dir2 === 'NORTH';
    case 'EAST': return dir2 === 'WEST';
    case 'WEST': return dir2 === 'EAST';
    default: return false;
  }
}

function dirReduc(dir) {
  for (let index = 0; index < dir.length;) {
    let dir1 = dir[index];
    let dir2 = dir[index + 1];

    if (areCompliments(dir1,dir2)) {
      dir.splice(index, 2);
      index = 0;
    } else {
      index += 1;
    }
  }

  return dir;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));    //[WEST]
  //North <-> South --> cancels
  //South
  // East<-> West --> cancels
  // South <-> North --> cancels
  // West --> no more dir

console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));  //["NORTH", "WEST", "SOUTH", "EAST"]
  //no 'direct' cancels -->all dir valid

console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])); //[]
  //all dir canceled --> no movement

