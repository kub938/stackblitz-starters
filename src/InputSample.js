import React, { useState, useRef } from 'react';

function InputSample() {
  const nameInput = useRef();

  const onClick = () => {
    nameInput.current.focus();
  };
  return (
    <div>
      <input type="text" />
      <input type="text" />
      <button onClick={onClick}></button>
    </div>
  );
}

export default InputSample;
