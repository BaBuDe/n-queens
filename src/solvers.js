/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  // initialize({n:n});
  // iterate over entire board toggling necessary pieces before checking
  // pick starting rowIndex and colIndex
  // toggle (drops 1)
  // check for conflicts (invoke 'hasAnyRookConflicts')
  //    if has conflicts, toggle (reverse original toggle)
  //    if no conflicts, move to next position
  var solution = new Board({n:n});

    for (var i = 0; i < n; i++) {
      for (var k = 0; k < n; k++) {
        solution.togglePiece(i, k);
        if (solution.hasAnyRooksConflicts()) {
          solution.togglePiece(i, k);
        } 
      }
    }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //get board;
  var board = new Board({n: n});
  var solutionCount = 0;
  //go through board row by row
  var recurse = function (board, col, row) {
    //stop when we've reached the end of the board
    //signal a correct solution
    if (col === row) {
      solutionCount++;
      return;
    }
    //go through row column by column
    for(var i = 0; i < col; i++) {
      //drop new rook
      board.togglePiece(row, i);
      //if rook has no conflicts, then leave rook and head to next row and try to drop another
      if( !board.hasAnyRooksConflicts() ) {
         recurse(board, col, row + 1);
      }
      //if rook has conflicts, pick back up and move to next column
      board.togglePiece(row, i);
    }
  }

  recurse(board, n, 0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
