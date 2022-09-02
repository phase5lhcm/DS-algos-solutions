/**
 * Given an array N of size N, sort it in ascending order by implementing insertion sort
 *
 * For the sake of my own understanding ONLY:
 * Insertion sort is a stable, in-place sorting algorithm
 *
 * Insertion sort works by creating a sorted subarray n within array N
 *  each iteration, the last element sorted subarray n and the element in arr[i - 1] is compared to each other
 *  arr refers to the rest of N where elements is arr are NOT sorted
 *  if the element in arr[i-1] is less than the last element in sorted subarray n, then arr[i-1]
 *  is moved to subarray n and sorted.
 *  Note that sub array n is the set of sorted values within N
 *
 */

const testArr = [8, 3, 1, 33, 0];
const n = testArr.length;

function insertionSort(arr, n) {
  let i, j, key;
  for (i = 0; i < n; i++) {
    key = arr[i];
    j = i - 1;
    console.log(`j is at ${j} and i is at ${i} and key is at ${key}`);

    // At this point, we move the elements from N[0...i-1] into the subarray n of sorted elements
    // Note that your first iteration may not result in a swap
    //  this means that after your first iteration,
    //  you will have a subarray of sorted elements, even if n.length is 1

    // the elements j represent those in sub sorted array n
    // so, j either begins at arr[0] or arr[n-1] (this depends on the criteria for sorting your array,
    //    for this one, we are sorting from the beginning so we are at arr[0]...or something like that)
    // anyway, as long as j is somewhere in the array and the value of i (key) is less than the value of j OR
        // ... the value of j is greater than key
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      console.log(
        ` is sorting happening? j is at ${j} and i is at ${i} and key is at ${key}`
      );
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return `Your insertion sorted array is ${arr}`;
}

console.log(insertionSort(testArr, n));
