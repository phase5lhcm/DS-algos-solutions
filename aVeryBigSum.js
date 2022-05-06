// calculate and print the sum of all values in an array
const arr = [100001, 100002, 100003, 100004];

const sumArr = (arr) => {
  const sumNum = arr.reduce(
    (previousVal, currentVal) => previousVal + currentVal
  );

  return sumNum;
};

console.log(sumArr(arr));
