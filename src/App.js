import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [currentInput, setCurrentInput] = useState('');
  const [previousInput, setPreviousInput] = useState('');
  const [operator, setOperator] = useState('');

  const handleNumberClick = (value) => {
    setDisplay((prevDisplay) => (currentInput === '0' ? value : prevDisplay + value));
    setCurrentInput((prevInput) => (currentInput === '0' ? value : prevInput + value));
  };

  const handleOperatorClick = (newOperator) => {
    setDisplay(newOperator);
    setOperator(newOperator);
    setPreviousInput(currentInput);
    setCurrentInput('');
  };

  const handleEqualsClick = () => {
    if (operator === '+') {
      setDisplay((parseFloat(previousInput) + parseFloat(currentInput)).toString());
    } else if (operator === '-') {
      setDisplay((parseFloat(previousInput) - parseFloat(currentInput)).toString());
    } else if (operator === '*') {
      setDisplay((parseFloat(previousInput) * parseFloat(currentInput)).toString());
    } else if (operator === '/') {
      setDisplay((parseFloat(previousInput) / parseFloat(currentInput)).toString());
    }
    setCurrentInput('');
    setPreviousInput('');
    setOperator('');
  };

  const handleClear = () => {
    setDisplay('0');
    setCurrentInput('');
    setPreviousInput('');
    setOperator('');
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleEqualsClick}>=</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
      </div>
    </div>
  );
}

export default App;
