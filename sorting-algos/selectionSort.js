/**
 * Implement selection sort by sorting an array N in ascending order
 *
 * Selection sort works by taking the smallest element in an array and moving it to the front of the array and so forth
 * The entire array is scanned first to find the smallest element
 * When the smallest element is found, you switch the smallest element with the element in the zeroth position and so forth until the array is fully sorted
 */
// Input - arr is the array of values and n is the length of arr. i.e arr.length
const arrTest = [3, 0, 6, 34, 8, 3, 9, 2, 40, 5, 3, 2];
const n = arrTest.length;
function selectionSort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let smallestVal = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[smallestVal] > arr[j]) {
        smallestVal = j;
      }
      // move smallest value currently in position i
      let key = arr[smallestVal];
      while (smallestVal > i) {
        arr[smallestVal] = arr[smallestVal - 1];
        smallestVal--;
      }
      arr[i] = key;
    }
  }
  return `Your selection sorted array is now ${arr}`;
}

console.log(selectionSort(arrTest, n));
