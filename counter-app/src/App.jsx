import { useState } from "react";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);

  function increment() {
    setcount(count + 1);
  }
  function decrement() {
    setcount(count - 1);
  }
  function reset() {
    setcount(0);
  }

  return (
    <>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <div className="buttons">
        <button onClick={increment}>INCREMNT</button>
        <button onClick={decrement}>DECREMENT</button>
        <button onClick={reset}>RESET</button>
      </div>
    </> 
  );
}

export default App;
