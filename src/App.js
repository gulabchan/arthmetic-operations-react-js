import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleAddition = () => {
    setResult(parseInt(num1) + parseInt(num2));
  };

  const handleSubtraction = () => {
    setResult(parseInt(num1) - parseInt(num2));
  };

  const handleMultiplication = () => {
    setResult(parseInt(num1) * parseInt(num2));
  };

  const handleDivision = () => {
    setResult(parseInt(num1) / parseInt(num2));
  };

  return (
    <div>
      <h2>Calculator</h2>
      <div>
        <label>
          Number 1:
          <input type="text" value={num1} onChange={handleNum1Change} />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input type="text" value={num2} onChange={handleNum2Change} />
        </label>
      </div>
      <div>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </div>
      <div>
        <label>Result: </label>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Calculator;
