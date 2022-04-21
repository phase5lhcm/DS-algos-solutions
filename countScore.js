// 0 - away team
// 1 - home team
const results = [0, 0, 1];
const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];
// console.log(competitions[0].map(ele => ele )); // returns [ 'HTML', 'C#' ]

const scoreCount = (results, competitions) => {
  let scoreCount = {};
  let row = 0;
  let rowPointer = 0;
  let resultsPointer = 0;

  while (row < results.length) {
    // define the hash table
    scoreCount[competitions[row][rowPointer]] = 0;
    rowPointer++;
    scoreCount[competitions[row][rowPointer]] = 0;
    row++;
    rowPointer--;

    if (results[resultsPointer] === 0) {
      rowPointer++;
      scoreCount[competitions[row][rowPointer]] = 0; 
      resultsPointer++;
      row++;
    } else {
      rowPointer++;
      scoreCount[competitions[row][rowPointer]] = 1;
      row++;
      resultsPointer++;
    }
  
    return scoreCount;
  }
};

console.log(scoreCount(results, competitions));
