export const Square = ({ value, xIsNext, onClick }) => {
  const handleClick = (e) => {
    e.target.childNodes[0].classList.add("animate__bounceIn");
    xIsNext ? e.target.classList.add("x") : e.target.classList.add("o");
  };

  return (
    <button
      className="square"
      onClick={(e) => {
        onClick();
        handleClick(e);
      }}
    >
      <div className="animate__animated">{value}</div>
    </button>
  );
};
