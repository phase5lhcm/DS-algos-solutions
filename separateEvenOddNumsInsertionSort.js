function separateEvenOddNums(arr) {
  // use a nested loop to compare i+1 to a value within sorted arr.
  // For example  [[sorted arr], i+1, ....n-1]

  // we begin at the first position and not the zeroth position
  // because i+1 and well, more specifically, because we need a value to possibly swap
  // with a value in the "sorted" array
  // Why is the element in the zeroth position sorted? Well, when N = 1, we can only return N as a base case.
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] % 2 === 0) {
        // here we swap our values until the condition is met
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
}
const testArr = [2, 4, 32, 3];
console.log(separateEvenOddNums(testArr));
