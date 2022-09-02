/**
 * Two Sum: find the indices of the values that add to the target
 * @param {*} nums
 * @param {*} target
 * @returns [indices of values that add to target]
 */

// Perform a loop once to store values in a hash. This allows us to easily look up indices of values
// We find values that add to our target by  x + y = z OR rather y = z - x OR x = z - y
// Big O Notation a hash has a fast search speed of O(1)
function twoSum(array, target) {
  const values = {}; // here we use a hash so that we can easily look up the index of our value
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];

    let missingVal = target - currentNum; // find values that add up to target, then get indices of those numbers
    let secondIndex = values[missingVal]; // returns index of second value that adds to target
    console.log(secondIndex);
    if (secondIndex != null) {
      return [secondIndex, i];
    } else {
      values[currentNum] = i;
    }
  }
}

const array = [3, 5, -4, 8, 11, 1, -1, 6];
const target = 10;

console.log(twoSum(array, target));
