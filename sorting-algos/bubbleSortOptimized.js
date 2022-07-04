/**
 * Give an array N, sort it from smallest to largest
 * note that n is the length of the array
 */

const testArr = [5, 2, 3, 11, 9, 0, 4, 67, 20];
const n = testArr.length;

function bubbleSortOptimized(arr, n) {
  let i, j, temp, swapped;

  for (i = 0; i < n - 1; i++) {
    swapped = false;
    for (j = 0; j < n - i - 1; j++) {
      console.log("i is here", i, arr[i]);
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (swapped == false) break;
  }
  return `Your sorted array is now ${arr}`;
}

console.log(bubbleSortOptimized(testArr, n));
