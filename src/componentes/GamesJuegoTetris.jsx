import React, { useState, useEffect } from "react";
import "../assets/scss/_03-Componentes/_GamesJuegoTetris.scss";

const ROWS = 20;
const COLS = 10;
const CELL_SIZE = 30;

const pieces = {
  square: [
    [1, 1],
    [1, 1],
  ],
  line: [
    [1, 1, 1, 1],
  ],
  // Agrega más piezas aquí (L, T, Z, etc.)
};

const GamesJuegoTetris = () => {
  const [board, setBoard] = useState([]);
  const [currentPiece, setCurrentPiece] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [speed, setSpeed] = useState(1000); // Velocidad inicial

  useEffect(() => {
    createBoard();
  }, []);

  const createBoard = () => {
    const newBoard = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
    setBoard(newBoard);
  };

  const drawBoard = () => {
    return board.map((row, rowIndex) =>
      row.map((cell, colIndex) => (
        <div
          key={`${rowIndex}-${colIndex}`}
          className={`cell ${cell === 1 ? "piece" : ""}`}
          style={{
            gridRow: rowIndex + 1,
            gridColumn: colIndex + 1,
          }}
        />
      ))
    );
  };

  const movePiece = (direction) => {
    let newX = currentPiece.x;
    if (direction === "left") newX -= 1;
    if (direction === "right") newX += 1;

    if (newX >= 0 && newX + currentPiece.shape[0].length <= COLS) {
      setCurrentPiece({ ...currentPiece, x: newX });
    }
  };

  const dropPiece = () => {
    let newY = currentPiece.y + 1;

    if (newY + currentPiece.shape.length > ROWS) {
      mergePieceToBoard();
      checkForCompletedLines();
      spawnNewPiece();
    } else {
      setCurrentPiece({ ...currentPiece, y: newY });
    }
  };

  const mergePieceToBoard = () => {
    const newBoard = [...board];
    currentPiece.shape.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell === 1) {
          newBoard[currentPiece.y + y][currentPiece.x + x] = 1;
        }
      });
    });
    setBoard(newBoard);
  };

  const checkForCompletedLines = () => {
    const newBoard = board.filter(row => row.some(cell => cell === 0));
    const completedRows = ROWS - newBoard.length;
    if (completedRows > 0) {
      const emptyRows = Array.from({ length: completedRows }, () => Array(COLS).fill(0));
      setBoard([...emptyRows, ...newBoard]);
    }
  };

  const spawnNewPiece = () => {
    const newPiece = {
      x: Math.floor(COLS / 2) - 1,
      y: 0,
      shape: pieces.square,
    };

    if (collision(newPiece, board)) {
      setIsGameOver(true);
    } else {
      setCurrentPiece(newPiece);
    }
  };

  const collision = (piece, board) => {
    for (let y = 0; y < piece.shape.length; y++) {
      for (let x = 0; x < piece.shape[y].length; x++) {
        if (piece.shape[y][x] === 1 && board[piece.y + y]?.[piece.x + x] === 1) {
          return true;
        }
      }
    }
    return false;
  };

  const handleKeyPress = (e) => {
    if (!isGameStarted) return;
    if (e.key === "ArrowLeft") movePiece("left");
    if (e.key === "ArrowRight") movePiece("right");
    if (e.key === "ArrowDown") dropPiece();
  };

  const startGame = (difficulty) => {
    createBoard();
    setIsGameOver(false);
    setIsGameStarted(true);
    setSpeed(difficulty === "easy" ? 1000 : difficulty === "medium" ? 500 : 300); // Ajustar la velocidad según el nivel
    spawnNewPiece();
  };

  const restartGame = () => {
    createBoard();
    setIsGameOver(false);
    setIsGameStarted(false);
    setCurrentPiece(null);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [currentPiece, isGameStarted]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isGameStarted && !isGameOver) dropPiece();
    }, speed);

    return () => clearInterval(interval);
  }, [board, currentPiece, isGameStarted, speed]);

  return (
    <div className="tetris-container">
      <div id="game-board">{drawBoard()}</div>
      <div className="controls">
        {!isGameStarted && (
          <div className="difficulty-selection">
            <h3>Iniciar Juego</h3>
            <button className="control-button" onClick={() => startGame("easy")}>Iniciar Fácil</button>
            <button className="control-button" onClick={() => startGame("medium")}>Iniciar Medio</button>
            <button className="control-button" onClick={() => startGame("hard")}>Iniciar Difícil</button>
          </div>
        )}
        {isGameStarted && (
          <div className="move-controls">
            <button className="control-button" onClick={() => movePiece("left")}>Izquierda</button>
            <button className="control-button" onClick={() => movePiece("right")}>Derecha</button>
            <button className="control-button" onClick={dropPiece}>Bajar</button>
            {isGameOver && <button className="control-button" onClick={restartGame}>Reiniciar Juego</button>}
          </div>
        )}
        {isGameOver && <div className="game-over">Game Over</div>}
      </div>
      <div className="instructions">
        <h3>Instrucciones</h3>
        <p>Utiliza las flechas para mover las piezas:</p>
        <ul>
          <li>Izquierda: Mueve la pieza a la izquierda</li>
          <li>Derecha: Mueve la pieza a la derecha</li>
          <li>Abajo: Acelera la caída de la pieza</li>
        </ul>
        <p>Selecciona la dificultad para comenzar el juego.</p>
      </div>
    </div>
  );
};

export default GamesJuegoTetris;
