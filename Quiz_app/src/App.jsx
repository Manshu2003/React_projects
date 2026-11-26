import "./App.css";
import Questions from "./Components/Questions";
import Timer from "./Components/Timer";
import { useState } from "react";
import Result from "./Components/Result";

function App() {
  const [isover, setIsOver] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <>
      <h1 className="text-2xl font-bold text-center mt-4">Quiz App</h1>
      <Timer setIsOver={setIsOver} isover={isover} />
      <div>
        {isover ? (
          <Result score={score} />
        ) : (
          <Questions setIsOver={setIsOver} setScore={setScore} />
        )}
      </div>
    </>
  );
}

export default App;
