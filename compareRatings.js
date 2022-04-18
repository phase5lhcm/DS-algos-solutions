


const compareScores = (score1, score2) =>{
let aPointer = 0;
let aScoreCount = [];
let bScoreCount = [];
let winner = [];

  while (aPointer < score1.length && aPointer < score2.length){
console.log("aPointer:", aPointer);
console.log("bPointer:", aPointer);
    console.log("arr length", score1.length);
    if(score1[aPointer] === score2[aPointer]){
      aPointer += 1;
    } else if(score1[aPointer] > score2[aPointer] ){
       console.log('aPointer before move', aPointer);
      aPointer++;
      aScoreCount.push(1);
      
      console.log('aPointer after move', aPointer);
      console.log('restart');

    } else{  
      aPointer += 1;
      bScoreCount.push(1);
      console.log(`bPointer is greater ${aPointer}`);
    }
  }
  console.log('aScoreCount', aScoreCount);
  console.log('bScoreCount', bScoreCount);
  winner.push(aScoreCount.length, bScoreCount.length);
  console.log('winner', winner);
    return winner;

}



const a = [5,6,7];
const b = [3,6,10];

console.log(compareScores(a,b));
