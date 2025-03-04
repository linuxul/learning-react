import React from "react";

const Counter = ({ onIncrease, onDecrease, number }) => {
  console.log('#2 number : ', number)
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
