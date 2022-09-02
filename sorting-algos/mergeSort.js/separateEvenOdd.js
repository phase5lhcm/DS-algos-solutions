/**
 * Given an array of numbers, rearrange them in place so that even numbers appear before odd ones
 */
function mergeEvenOddNumsHelper(leftArr, rightArr) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] % 2 === 0) {
      result.push(leftArr[i]);
      i++;
    } else {
      result.push(rightArr[j]);
      j++;
    }
  }
  // Sometimes our left and right arrays will be different lengths
  // This means that there might still be values left over in the array.
  // In these cases, we will just push the remaining values into the final result array
  // in other words, as long as i or j have not gotten to the end of their
  // respective arrays even after leftArr and rightArr have had some of thier values checked
  // go ahead and push those remaining values into the result array
  while (i < leftArr.length) {
    result.push(leftArr[i]);
    i++;
  }
  while (j < rightArr.length) {
    result.push(rightArr[j]);
    j++;
  }
  return result;
}

function separateEvenOddNums(arr) {
  // base case will return our array if it has zero or no values
  if (arr.length <= 1) return arr;

  // decare a middle value for each node
  // this will separate each node until arr.length hits our base case
  let mid = Math.floor(arr.length / 2);
  // when mid is applied to an array, it divides the length of the array into two
  // this gives us a left side and a right side
  // with each side, we will recursively call separateEvenOddNums
  // all separateEvenOddNums does (before we call our helper function)
  // is continuously separate our array until the length of each separation is 1 or 0
  let leftSide = separateEvenOddNums(arr.slice(0, mid)); // mid exclusive
  let rightSide = separateEvenOddNums(arr.slice(mid));

  // now that we have our right side and left side,
  // we merge both sides while applying sorting criteria which is applied in the helper function
  return mergeEvenOddNumsHelper(leftSide, rightSide);
}
const arrTest = [1, 2, 3, 4];
console.log(separateEvenOddNums(arrTest));
