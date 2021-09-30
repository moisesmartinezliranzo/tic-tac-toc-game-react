import React from "react";
import { Square } from "./Square";

export const Board = () => {
  const renderSquare = (i) => {
    return <Square value={i} />;
  };

  return (
    <div>
      <div>
        <div>{renderSquare(1)}</div>
        <div>{renderSquare(2)}</div>
        <div>{renderSquare(3)}</div>
      </div>
      <div>
        <div>{renderSquare(4)}</div>
        <div>{renderSquare(5)}</div>
        <div>{renderSquare(6)}</div>
      </div>
      <div>
        <div>{renderSquare(7)}</div>
        <div>{renderSquare(8)}</div>
        <div>{renderSquare(9)}</div>
      </div>
    </div>
  );
};
