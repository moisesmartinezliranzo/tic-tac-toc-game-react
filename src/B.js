import { C } from "./C";

export const B = ({ value, onClick }) => {
  return (
    <div>
      <h2>B</h2>
      <C value={value} onClick={onClick} />
    </div>
  );
};
