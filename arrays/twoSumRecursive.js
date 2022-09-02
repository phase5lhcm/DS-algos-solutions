function twoSumRecursive(arr, targetSum) {
  const twoSum = [];
  let i;
  // base case where i is out of bounds
  const helper = (arr, i) => {
    if (arr.length === 1 || i === arr.length) {
      twoSum.push(arr); // should I return arr or should I push arr to twoSum and return twoSum?
      return;
    }

    // while (i < arr.length) {
    //   if (arr[i] + arr[i + 1] === targetSum) {
    //     twoSum.push(arr[i], arr[i + 1]);
    //     i++;
    //     return twoSum;
    //   }
    // }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] + arr[i + 1] === targetSum) {
        twoSum.push(arr[i], arr[i + 1]); // do i really need an auxilliary array? Can't I just return arr[i], arr[i+1]?
        return twoSum;
      }
    }
    helper(arr, i + 1);
  };
  // why do we make this call here again?
  helper(arr, i);
  return twoSum;
}
const arr = [1, 2, 3, 4];
const targetSum = 3;
console.log(twoSumRecursive(arr, targetSum));

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

// console.log(twoSum([-1,2,4,1],5))

function twoSumRec(arr, i, j, target) {
  if (i === j) return false;
  if (arr[i] + arr[j] === target) return [i, j];
  if (arr[i] + arr[j] < target) {
    return twoSumRec(arr, i + 1, j, target);
  }
  if (arr[i] + arr[j] > target) {
    return twoSumRec(arr, i, j - 1, target);
  }
}
let recNums = [-1, 4, 2, 1];
console.log(twoSumRec(recNums, 0, recNums.length - 1, 5));
