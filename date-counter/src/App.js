import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [steps, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date().toLocaleDateString("en-US", options);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="App">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={steps}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {steps}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - steps)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + steps)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>
          <b>{date}</b>
        </span>
      </p>

      {count !== 0 || steps !== 1 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}

export default App;
