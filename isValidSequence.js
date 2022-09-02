/*
Write a function that takes two arrays as arguments.
 Your function will check your second array to see if its values are a subsequent of its parent(first array).

Note that values do not have to be next to each other (for the possible child array), 
but they must appear in the same order as they do in the parent. 


Eg. 
[1,5,6,4,2,3,4]
[2,4,2,4] // returns false
and
[1,1,6,3,3,3,4]
[6] // returns true
but
[1,1,6,3,3,3,4]
[6,1,3,3] // returns false

*/

const isValidSubsequence = (array, sequence) => {
  let pointer = 0;
  // we will use this container to store potential matching values
  //and compare these matching values to the array they were taken from.
  let container = [];

  /*
    Start by identifying the value of the zeroth index in your sequence (i.e. the first element in the sequence).
    If this value matches the first instance of its matching value in the parent array, 
    then we will continue the search. 
    This is important, because the passing criteria specifies that 
    the values in the sequence array need to appear in the same order
     of (but not adjacent to) the values of its parent 
     */
  // const firstVal = array.find((element) => element === sequence[pointer]);
  const firstVal = sequence[0];
  console.log(firstVal);

  // loop thru the entire parent array, not the sequence
  while (pointer < array.length) {
    // firstVal being true lets us know that there is a POTENTIAL match in sequences (sequence array and parent array)
    if (firstVal) {
      // find the values in the sequence array that correspond to the values in the parent array and move the pointer by one.
      let element = sequence.find((element) => element === array[pointer]);
      if (element) {
        container.push(element);
      }
      pointer++;
    } else {
      return false; // if the firstValue of sequence array does not appear as the first instance in the parent array
    }
  }

  /*
  at this point, we have confirmed order of appearance of sequence array values and parent array values. 
  Now we need to ensure that the values moved to the container directly match the values that were in the sequence.
 Notice that both length and value are checked. 
 Sometimes the length of the container may not match (because a non matching value can appear at the end of the array,
 I can probably check for this earlier in the function but w.e 
 OR the sequence array is intentionally short but has all of the same values....see example values)
 */

  if (
    (container.length === sequence.length &&
      sequence.every((val, index) => val === container[index])) ||
    sequence.every((val, index) => val === container[index])
  ) {
    return true;
  } else {
    return false;
  }
};

// console.log(isValidSubsequence([1, 1, 1, 1, 1], [1, 1, 1])); // returns true
console.log(isValidSubsequence([1, 2, 3], [3, 0]));

function isSubArray(A, B, n, m) {
  // Two pointers to traverse the arrays
  var i = 0,
    j = 0;
  // Traverse both arrays simultaneously
  while (i < n && j < m) {
    // If element matches
    // increment both pointers
    if (A[i] == B[j]) {
      i++;
      j++;
      // If array B is completely
      // traversed
      if (j == m) return true;
    }
    // If not,
    // increment i and reset j
    else {
      i = i - j + 1;
      j = 0;
    }
  }
  return false;
}
var A = [2, 3, 0, 5, 1, 1, 2];
var B = [3, 5, 1];
var n = A.length;
var m = B.length;

console.log(isSubArray(A,B,n,m))

// also works with strings.
function checkSubArr(mainArr, subArr, mainCounter, subCounter) {
  if (subCounter === subArr.length) return true;
  if (mainCounter === mainArr.length) return false;
  if (subCounter < subArr.length && mainCounter < mainArr.length) {
    if (mainArr[mainCounter] === subArr[subCounter]) {
      console.log(checkSubArr(mainArr, s));
    }
  }
}
