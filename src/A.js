import React, { useState } from "react";
import { B } from "./B";

export const A = () => {
  const [valueA, setValueA] = useState("x");

  const handleClick = () => {
    console.log("click ...");
    setValueA("A");
  };

  return (
    <div>
      <h1>A</h1>
      <B value={valueA} onClick={() => handleClick()} />
    </div>
  );
};
