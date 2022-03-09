/*
Write a function that will return an array depicting which lights
will be on in a hallway of n lights after n passes --> toggling 
specific lights each round.

Rules
  - Input --> n (gonna be > 0)?
  - Output --> an array of lights numbers that are on [1,3...]

  - on the first pass --> every light is turned on

  - 'n'
    - number of lights in the hallwasy
    - number of 'rounds' we'll take down he hallway
      1 .. 5 (inclusive)

  - round
    - if lightNum % round === 0 --> toggle that light
    - else just leave as it was
  
  - lightNum --> index + 1;

Data - Array
  - status --> bool
  - array of lights[0...n-1]

Algo
  -create out hallway
    - populate with n lights --> all set to 'off' --> false
    lights = new Array(n).fill(false);
  - make my passes
    - pass = 1
    - pass <= n
    - ++
    - go through all the lights and check light num
      - lights.forEach(status, index) ..
        - lightNum index + 1
        - if lightNum % pass === 0
          - ...change the status of the light AT that index
    - create an array to capute the lights still on
      - left on []
    - lights.forEach(status, index) ..
      - if status --> leftOn.push(index + 1);
    - return leftOn [];

Example

*/

function lightsOn(n) {
  let lights = new Array(n).fill(false);
  for (let passNum = 1; passNum <= n; passNum += 1) {
    lights.forEach((status, index) => {
      let lightNum = index + 1;
      if (lightNum % passNum === 0) {
        lights[index] = !status;
      }
    });
  }
  let lightsLeftOn = [];
  lights.forEach((status, index) => {
    if (status) {
      lightsLeftOn.push(index + 1);
    }
  })

  return lightsLeftOn;
}



console.log(lightsOn(5));     //[1,4];
console.log(lightsOn(10));     //[1,4, 9];

//Edge Case
console.log(lightsOn(1));     //[1]
console.log(lightsOn(2));     //[1]

console.log(lightsOn(0));     //[]


console.log(lightsOn(1000));     //

