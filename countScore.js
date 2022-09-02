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
    // define the hash table with the first two values
    scoreCount[competitions[row][rowPointer]] = 0;
    rowPointer++;
    console.log("Add first value to scoreCount", scoreCount);
    scoreCount[competitions[row][rowPointer]] = 0;
    console.log("Add second value to scoreCount", scoreCount);
    console.log(
      `row:${row}, rowPointer:${rowPointer}, position value: ${competitions[row][rowPointer]}`
    );

    if (row === 0 && results[rowPointer] === 0) {
      let scoreValues = Object.keys(scoreCount);
      console.log("Add one to away team", scoreCount);
    } else {
      console.log("Add one to home team", scoreCount);
      scoreCount[competitions[row][rowPointer]] += 1;
      console.log(
        Object.hasOwnProperty(competitions[row][rowPointer]),
        Object.keys(scoreCount)[0] === competitions[row][rowPointer],
        Object.keys(scoreCount)[0]
      );
    }
    row++;
    console.log("row", row);

    // why is rowPointer undefined if this increments?
    // this is because row++ moves to the next row in competitions but rowPointer
    // is still at the end of the array in the previous row
    rowPointer--;
    console.log("value of position", competitions[row][rowPointer]);
    // console.log("scorecount value",Object.keys(scoreCount)[0]);

    if (results[resultsPointer] === 0 && row === 0) {
      // options are 0 for away team or 1 for home team

      console.log(
        "one point for away team :",
        results[resultsPointer] === 0,
        scoreCount
      );
      rowPointer++;
      scoreCount[competitions[row][rowPointer]] = 0;
      console.log("Add third value to scoreCount", scoreCount);
      resultsPointer++;
      row++;
      console.log("row", row);
    } else {
      console.log("one point for away team :", results[resultsPointer] === 0);
      rowPointer++;
      scoreCount[competitions[row][rowPointer]] = 1;
      row++;
      resultsPointer++;
    }

    return scoreCount;
  }
};

console.log(scoreCount(results, competitions));
