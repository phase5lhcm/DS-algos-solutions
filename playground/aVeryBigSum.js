// const num = [1000015, 1000016, 1000017, 1000018];

// const sumNum = num.reduce(
//   (previousVal, currentVal) => previousVal + currentVal
// );
// console.log(sumNum);
const arr = [100001, 100002, 100003, 100004];
const bigSum = (arr) => {
  let int = 0;
  let sumTotal = 0;
  let str = arr[int].toString();
  const container = [];
  while (int <= arr.length) {
    console.log("check", str.substring(str.length - 1));
    console.log("str", str);
    sumTotal += str.substring(str.length - 1);
    console.log("sumTotal", sumTotal);
    console.log(`counter is at ${int}`);
    int++;
  }

  container.push(str.substring(0, str.length - 1));
  console.log(container.length);
  console.log("this", typeof container[0]);
  const val = parseFloat(container[0]);

  console.log("this", typeof val);
  if (sumTotal === 10) {
    container[0] = container[0].substring(0, container[0].length - 1);
    container.shift();
    container.push(sumTotal + val);
  } else {
    container.shift();
    container.push(sumTotal + val);
  }

  return container;
};
console.log(bigSum(arr));
