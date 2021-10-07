import { Square } from "./Square";

export const Board = ({ squares, xIsNext, onClick }) => {
  return (
    <>
      <div className="board-row">
        <Square
          value={squares[0]}
          xIsNext={xIsNext}
          onClick={() => onClick(0)}
        />
        <Square
          value={squares[1]}
          xIsNext={xIsNext}
          onClick={() => onClick(1)}
        />
        <Square
          value={squares[2]}
          xIsNext={xIsNext}
          onClick={() => onClick(2)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          xIsNext={xIsNext}
          onClick={() => onClick(3)}
        />
        <Square
          value={squares[4]}
          xIsNext={xIsNext}
          onClick={() => onClick(4)}
        />
        <Square
          value={squares[5]}
          xIsNext={xIsNext}
          onClick={() => onClick(5)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          xIsNext={xIsNext}
          onClick={() => onClick(6)}
        />
        <Square
          value={squares[7]}
          xIsNext={xIsNext}
          onClick={() => onClick(7)}
        />
        <Square
          value={squares[8]}
          xIsNext={xIsNext}
          onClick={() => onClick(8)}
        />
      </div>
    </>
  );
};
