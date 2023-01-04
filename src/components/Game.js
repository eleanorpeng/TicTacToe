import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";
import Square from "./Square";

const Game = () => {
  // TODO: Set up states and functions: position of Xs and Os on board,
  // step number, whether X is next, is there a win or tie, etc.
  const [board, setBoard] = useState(Array(9).fill(null));
  // const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  let winner = calculateWinner();
  function calculateWinner() {
    if (board[0] === board[1] && board[0] === board[2] && board[0] !== null) {
      return board[0];
    } else if (
      board[3] === board[4] &&
      board[3] === board[5] &&
      board[3] !== null
    ) {
      return board[3];
    } else if (
      board[6] === board[7] &&
      board[6] === board[8] &&
      board[6] !== null
    ) {
      return board[6];
    } else if (
      board[0] === board[3] &&
      board[0] === board[6] &&
      board[0] !== null
    ) {
      return board[0];
    } else if (
      board[0] === board[4] &&
      board[0] === board[8] &&
      board[0] !== null
    ) {
      return board[0];
    } else if (
      board[1] === board[4] &&
      board[1] === board[7] &&
      board[1] !== null
    ) {
      return board[1];
    } else if (
      board[2] === board[5] &&
      board[2] === board[8] &&
      board[2] !== null
    ) {
      return board[2];
    } else if (
      board[2] === board[4] &&
      board[2] === board[6] &&
      board[2] !== null
    ) {
      return board[2];
    } else {
      return null;
    }
  }
  let curPlayer = xIsNext ? "X" : "O";
  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) {
      return;
    }
    boardCopy[i] = curPlayer;

    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };
  let jumpToStart = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    winner = null;
  };

  let result = "";

  if (winner !== null) {
    result = `Winner: ${winner}`;
  } else if (winner === null && board.includes(null)) {
    result = `Next Player: ${xIsNext ? "X" : "O"}`;
  } else {
    result = "Tie Game";
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board squares={board} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <button onClick={jumpToStart}>Go to Start</button>
        </div>
        <h3>{result}</h3>
      </div>
    </>
  );
};

export default Game;
