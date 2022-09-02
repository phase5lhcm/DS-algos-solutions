/**
 * Given a list N of numbers, sort using merge sort
 */

const values = [3, 41, 24, 0, 7, 5, 33, 5, 1, 4, 0, 4];

// merge sort uses a divide and conquer strategy

let boundary = values[0];

// implement a helper function that is recursive
// the helper function specifies which part/half of the array we are currently sorting
// the helper function will take three arguments, arr, start and end
//we will us an auxilliary array to store our sorted values.

// what happens if our array N is already sorted? Ensure to account for this possibility

let leftPointer = 0;
let rightPointer = 1; 
