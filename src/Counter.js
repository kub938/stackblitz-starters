import React, { useState } from 'react';

function Counter(props) {
  let [counter, setCounter] = useState(0);
  const onIncrease = () => {
    setCounter(counter + 1);
  };
  const onDecrease = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1></h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
