/**
 * Write a function that takes a sorted array as an argument and returns an array where each value is squared
 * Your return array must be sorted as well
 */
const sortedArr = (arr) => {
    const squaredArr = []
  arr.forEach((val) => {
    squaredArr.push(Math.pow(val,2))
  });
  // 
  return squaredArr.sort(function(a, b){return a-b});
};

console.log(sortedArr([1, 2, 3, 4, 5, 6, 7, 8, 9]));
