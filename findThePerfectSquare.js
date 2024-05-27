/*Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative. */

function findNextSquare(sq) {
    let root = Math.sqrt(sq);
    let result = 0;
    if(sq % root === 0){
     result =  (root + 1) * (root + 1);
      return result
    }else{
    // Return the next square if sq is a perfect square, -1 otherwise
    return -1;
      }
  }
  console.log(findNextSquare(121))