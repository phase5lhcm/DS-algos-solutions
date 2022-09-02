/**
 * Given a set of n distinct integers, return all possible subsets
 * The solution must not contain duplicate subsets
 *
 * Time complexity O(2^n(n))
 *
 * Space complexity = O(2^n(n))
 */

const bigSet = "word";

function generateSubset(arr) {
  const arrSubsets = [];

  //depth first search/helper function
  const helper = (i, arr, slate) => {
    // base case - i must be put of range, which means we are at atomic level
    // when at atomic level, we will copy the slate at the leaf level and push it into the result
    if (i === arr.length) {
      // i.e stop the function when i is at position N.length + 1
      //   console.log("*", slate);
      // the first result is going to be an empty array because arr.length + 1 is null I guess...or out of bounds?
      arrSubsets.push(slate.slice()); // push whatever is in the auxilliary array into the final set of subsets
      return;
    }

    // recursive calls
    // exclude
    helper(i + 1, arr, slate); // repeat the call and move i
    //include
    slate.push(arr[i]);
    helper(i + 1, arr, slate); // repeat the call and move i
    slate.pop();
  };
  helper(0, arr, []);
  //It seems like because i traverses the length of arr
  // then the tree is actually created from arr.lenth and goes backwards to the zeroth position.
  // Note that no sorting is actually happenning in this case
  return arrSubsets;
}

console.log(generateSubset(bigSet));
