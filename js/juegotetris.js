const ROWS = 20;
const COLS = 10;
const CELL_SIZE = 30;
let board = [];
let currentPiece = { x: 0, y: 0, shape: [[1, 1], [1, 1]] }; // Ejemplo de una pieza cuadrada

function createBoard() {
  for (let row = 0; row < ROWS; row++) {
    board[row] = [];
    for (let col = 0; col < COLS; col++) {
      board[row][col] = 0;
    }
  }
}

function drawBoard() {
  const gameBoard = document.getElementById('game-board');
  gameBoard.innerHTML = '';

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.style.top = row * CELL_SIZE + 'px';
      cell.style.left = col * CELL_SIZE + 'px';
      if (board[row][col] === 1) {
        cell.classList.add('piece');
      }
      gameBoard.appendChild(cell);
    }
  }
}

function update() {
  // Actualizar la lógica del juego aquí
  drawBoard();
  setTimeout(update, 1000); // Llamada recursiva para actualizar el juego cada segundo
}

function init() {
  createBoard();
  update();
}

document.addEventListener('DOMContentLoaded', init);
