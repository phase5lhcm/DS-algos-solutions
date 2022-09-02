/*
Write a function twoSum that takes an array of values and a target sum as arguments.
arguments: 1) array is an array of integer values. 
           2) target is an integer value
Sort your function, then your function should identify which two values, if any, in array add together to create target

Your return value is an array of the two numbers added to create targetSum

Identify the time space complexity of your solution and explain why.
*/

const twoSum = (array, target) => {
  // The two values you identify will be added to this array to be returned
  let sumValues = [];
  // copy array since we intend on mutating it but this time be sure to sort your values.
  const arraySorted = array.sort(function (a, b) {
    return a - b;
  });
  console.log("sort values", arraySorted);
  // We will loop through array once to see if any two values can be added to get target. Begin by identifying two pointers for this one loop (instead of one pointer per loop). Our function will loop until both pointers meet in the middle
  let rightVal = arraySorted.length - 1;
  let leftVal = 0;

  // now your loop will check until your conditions are false. In other words, we only need to loop thru our array once until our conditions fail. To do this,
  // I will track our values by index.
  // For each scenario, I will move the pointer one step closer to the middle until the conditions are false

  while (leftVal < rightVal) {
    if (arraySorted[rightVal] + arraySorted[leftVal] === target) {
      // console.log(`sumValues before values are added: ${sumValues}`);
      // console.log(`Right pointer: ${rightVal}`);
      // console.log(`Left pointer: ${leftVal}`);
      sumValues.push(arraySorted[rightVal], arraySorted[leftVal]);
      rightVal -= 1;
      leftVal += 1;
      //  console.log(`Right pointer after move: ${rightVal}`);
      // console.log(`Left pointer after move: ${leftVal}`);
      //   console.log(sumValues);
    } else if (arraySorted[rightVal] + arraySorted[leftVal] > target) {
      console.log(`rightVal before move: ${rightVal}`);
      rightVal -= 1;
      console.log(`move righttval only: ${rightVal}`);
    } else {
      console.log(`leftVal before move: ${leftVal}`);
      leftVal += 1;
      console.log(`move leftval only: ${leftVal}`);
    }
  }
  return sumValues;
};

console.log(twoSum([2, 4, 11, -1, 5, 8, 2, 7, 3, 3], 6));
