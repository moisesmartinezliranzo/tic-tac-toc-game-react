import React, { useState } from "react";
import { Board } from "./Board";

export const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  let status = `Next player: ${xIsNext ? "X" : "O"}`;

  const handleClick = (i) => {
    console.log(i);
    const newSquares = [...squares];

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    setSquares(newSquares);

    newSquares[i] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} onClick={(e) => handleClick(e)} />
        <div>
          <div className="status">{status}</div>
        </div>
      </div>
    </div>
  );
};
