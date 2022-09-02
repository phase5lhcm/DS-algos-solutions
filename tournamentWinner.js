// Write an algorithm that determines who won a competition based on the values in an array called results
// If results[i] === 1, then the home team won a point, and vice versa for the away team
// the competitions array is an array of arrays where each inner array represents one competition round
// note that the first value in each row of the competitions array represents the home team and vice versa
// for the away team
const competitions = [
  ["HTML", "C#"], // homeTeam, awayTeam
  ["C#", "Python"],
  ["Python", "HTML"],
];
const results = [0, 0, 1];

const whoWon = (results, competitions) => {
  /**
   * The winner object will be populated with the winner of each round
   * The pointer variable is used to track the results value per iteration
   * rowPointer keeps track of which round in the competition we are evaluating
   */
  winner = {};
  let pointer = 0;
  let rowPointer = 0;
  while (rowPointer <= competitions.length - ) {
    for (const key in results) {
      // recall that a zero means the away team wins a point
      // away team is in the second position in each round in the competition array
      if (results[pointer] === 0) {
        // since we cannot add duplicate keys/properties/winning team, we must check if it already exists in the object
        // dedicated to storing winning teams
        if (!winner.hasOwnProperty(competitions[rowPointer][1])) {
          winner[competitions[rowPointer][1]] = 1; // if team does not exist, then add team and give it one point
          pointer++; // move to next value in results array
          console.log(`column pointer is now here ${pointer}`);
          rowPointer++; // move to next row/round/array in competitions and repeat checks

          console.log(`row pointer is now at ${rowPointer}`);
        } else {
          // if the property already exists, then just add another point
          winner[competitions[rowPointer][1]] += 1;

          pointer++;
          rowPointer++;

          console.log(`row pointer is now at ${rowPointer}`);
        }
      } else if (results[pointer] === 1) {
        // repeat the same checks but this time our checks are for if the value of results[i] = 1
        if (!winner.hasOwnProperty(competitions[rowPointer][0])) {
          winner[competitions[rowPointer][0]] = 1; // home team is in position 0
          pointer++;
          rowPointer++;
        } else {
          winner[competitions[rowPointer][0]] += 1;
          pointer++;
          rowPointer++;

          console.log(`row pointer is now at ${rowPointer}`);
        }
      }
    }
  }

  // now calculate the winner based on which team has the higher value
  //   const teams = Object.keys(winner);
  //   console.log(teams);
  //   const winningTeam = teams.forEach((key) => {
  //     // I think I can improve this check here because it is possible to have more than one team with points greater than one.
  //     // The idea is to get the team with the MOST points
  //     if (winner[key] > 1) {
  //       console.log(`${key}`);
  //     }
  //   });
  //   console.log(winningTeam);
  //   return winningTeam;
  const winningResults = Object.values(winner);
  console.log("winning", winningResults);
  for (let i = 0; i < winningResults.length; i++) {
    if (winningResults[i] < winningResults[i] + 1) {
      console.log("home team won");
    } else {
      console.log("away team won");
    }
  }
};

console.log(whoWon(results, competitions));
