/**
 * Implementation of bubble Sort
 * Bubble Sort is a sorting algorithm that works by repeatedly swapping the adjacent
 *  elements if they are in the wrong order
 * Bubble sort is not suitable for large data sets
 *
 * Given an array of N elements, sort it so that the array is arranged from smallets element to largets
 */

const arrTest = [64, 34, 25, 12, 22, 11, 90];
const n = 7;

// 1. First create a helper function that will perform the swapping

function swapValues(arr, smallerVal, largerVal) {
  const tempVal = arr[smallerVal];
  arr[smallerVal] = arr[largerVal];
  arr[largerVal] = tempVal;
}
// use helper function to perform sawpping based on the criteria if the element in position j is greater thab the element j + 1
function bubbleSort(arr, n) {
  var i, j;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapValues(arr, j, j + 1);
        // console.log(arr);
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arrTest, n));

// This algorithm takes 0(N^2) time to sort even if the array is sorted.
// It can be better optimized to stop running if the inner loop did not cause a swap. See the better optimized version of this