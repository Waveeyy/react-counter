import React, { useState } from "react";

function FunctionCounter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Function Counter</h1>
      <h2>COUNT: {count} </h2>
      <button onClick={handleDecrease}>Decrease Count</button>
      <button onClick={handleIncrease}>Increase Count</button>
    </div>
  );
}

export default FunctionCounter;
