/**
 * Given two arrays where n1 is sorted in ascending order
 * and n2 where m = n/2 is separated where one half is sorted in ascending order
 * and the other half are zeros
 * Example:
 *  n1 = [1,3,6]
 * n2 = [2,5,7,0,0,0]
 * merge n1 into n2 and sort in ascending order but remove the zeros
 *  therefore the result for the above would be
 * [1,2,3,4,5,6,7]
 */

function mergeArrIntoArr(leftArr, rightArr) {
  let result = [];
  let i, j;

  while (i < leftArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      result.push(leftArr[i]);
      i++;
    } else if (rightArr[j] === 0) {
      rightArr.pop(rightArr[j]);
    } else {
      result.push(rightArr[j]);
    }
  }
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
const first = [1, 3, 5];
const second = [2, 4, 6, 0, 0, 0];
console.log(mergeArrIntoArr(first, second));
