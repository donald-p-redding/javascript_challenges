/*
https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

Write a function that will calc the total time required to process 
a number of customer transactions GIVEN a number of tills

Rules
  - Input
    - an array of customer transactions--> each element is a customer and the value
      is the amount of time their transaction should take
    - a 'n' value that will represent the number of tills avail

Obser.
  - one till will be the total of all transactions
  - if tills > num. of cust. --> time will be the longest trans
  - no customers --> 0 time --> there were no trans.

  - how to track time spent at a till --> when is it free to use again?
  - how to tabulate the amount of time
    - what cond. const. adding more time to the total

  - order of transactions really does matter --> first come first serve
    - can't reorder the array


queueTime([10,2,3,3], 2)
  -customer 1 takes till 1
  -customer 2 takes till 2
  -customer 2 finishes
  - customer 3 takes till 2
  - customer 3 finishes
  - customer 4 takes till 2
  - customer 4 finishes --> total elapse time -->8min
  - customer 1 still has 2min remaining

- develop a counter loop
  - each min passed adds a count
  - all customers must be loaded in
  - every customer transaction must be 0 by the end

  - the counter is our total elapse time

 Data
  - array of tills


Algo
  - create an array of tills to n amount
    - new Arrau(n) --> they'll be empty
  - populate tills with the first n customers
    - iterate over tills and shift customer trans
  - save remaining customer transactions
  - create a counter loop that incrments a min to the total
    - init a total = 0;
    while (customersremaining && transInpogress)
      - total +=1
    - and decrements a min per till trans. per cycle
      - tills = tills.map(..-1)
    - if a till becomes open --> fill with a new customer
    - if till.forEach(timereamin index) --> if timeremain 0 till[]index --> remain.shift
  - repreat until no more customers AND all till transactions are now at 0
  - return the totl of the cycle



Examples:

*/

function transRemaining(tills) {
  return tills.some(timeRemain => timeRemain > 0);
}

function queueTime(customers, tillCount) {
  let tills = new Array(tillCount);
  for (let index = 0; index < tills.length; index += 1) {
    tills[index] = customers.shift();
  }

  let total = 0;
  while (customers.length > 0 || transRemaining(tills)) {

    tills = tills.map(timeRemain => timeRemain -= 1);
    
    
    tills.forEach((timeRemain, index) => {
      if (timeRemain === 0) {
        if (customers.length >= 1) {
          tills[index] = customers.shift();
        }
      }
    })
    total += 1;
  }
  return total;
}

console.log(queueTime([5,3,4], 1));         //12
  // one till --> all time will count towards total

console.log(queueTime([10,2,3,3], 2));       //10
  // customer 1 takes till 1
  // rest of customers take till 2 but will finish before customer one
  //the longest transaction or time it will take to ring all cust. will be 10

console.log(queueTime([2,3,10], 2));        //12
  // customers 1 and 2 take the tills
  // customer 1 finishes in 2 min--> customer 3 takes the open till
  // cusromer 2 finished while customer 3 isstill checking out
  // 2 + 10 --> 12

console.log(queueTime([], 1));      //0
  // no customers to ring up --> no time at all

console.log(queueTime([1,2,3,4], 1))        //10
  //one till --> sum of all trans.

console.log(queueTime([2,2,3,3,4,4], 2));     //9
  //all pairs of transactions will complete at the same time
    //sum of all those trans. times
    // 2 + 3 + 4 --> 9

console.log(queueTime([1,2,3,4,5], 100));       //5
  //there's a till for every cust.
  //the longest trans. takes 5min --> 5


