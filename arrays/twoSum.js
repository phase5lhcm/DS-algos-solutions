/**
 * Write a function that takes in a non-empty array of distinct integers and an
 * integet representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array,
 *  in any order. If no two numbers sum up to the target sum, the function should return an empty array.
 */

// without recursion
function twoSumNoRecursion(arr, targetSum) {
  let pointer = 0;

  while (pointer <= arr.length) {
    let finalVals = [];
    if (arr[pointer] + arr[pointer + 1] === targetSum) {
      finalVals.push(arr[pointer], arr[pointer + 1]);
      pointer++;
    } else {
      return "No values add to target sum";
    }
  }
  return `Your final values are ${finalVals}`;
}
const arr = [2, 3, 1];
const targetSum = 3;

console.log(twoSumNoRecursion(arr, targetSum));
