function isSubArray(array, sequence) {
  // Two pointers to traverse the arrays
  let i = 0,
    j = 0;
  // base cases
  if (array.length === sequence.length) {
    if (array[i] === sequence[j]) {
      i++;
      j++;
      return true;
    }
  }
  if (sequence.length > array.length) {
    return false;
  }
  // Traverse both arrays simultaneously
  while (i < array.length && j < sequence.length) {
    // If element matches increment both pointers
    if (array[i] == sequence[j]) {
      i++;
      j++;
      if (j === sequence.length - 1) {
        return true;
      }
    }
    // If not,increment j
    else {
      i++;
    }
  }
  return i === array.length;
}
var A = [5, 1, 22, 25, 6, -1, 8, 10];
var B = [1, 6, -1, 5];

console.log(isSubArray(A, B));
