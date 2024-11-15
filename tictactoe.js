let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

function makeMove(index) {
  if (gameBoard[index] === '') {
    gameBoard[index] = currentPlayer;
    document.getElementById(`cell${index}`).textContent = currentPlayer;
    updateTurnMessage();

    if (checkWinner()) {
      setTimeout(() => alert(`${currentPlayer} wins!`), 100);
    } else if (!gameBoard.includes('')) {
      setTimeout(() => alert("It's a draw!"), 100);
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
  });
}

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  document.getElementById('turnMessage').textContent = "Player X's turn";
  for (let i = 0; i < 9; i++) {
    document.getElementById(`cell${i}`).textContent = '';
  }
}

function updateTurnMessage() {
  document.getElementById('turnMessage').textContent = `Player ${currentPlayer === 'X' ? 'O' : 'X'}'s turn`;
}