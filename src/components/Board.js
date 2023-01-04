import React from "react";
import Square from "./Square";

const Board = (props) => (
  <div className="board">
    {props.squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => props.onClick(i)} />
    ))}
  </div>
);

export default Board;
