function pair_sum_sorted_array(numbers, target) {
  const arrTwoSum = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        arrTwoSum.push(i, j);
        return arrTwoSum;
      }
    }
  }
}

const numbers = [2, 3, 4, 5];
const target = 5;

console.log(pair_sum_sorted_array(numbers, target));
