import questions from "./question.json";
import { useState } from "react";

function Questions({ setIsOver,setScore }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  


  console.log(questions[currentQuestion]);
  const handleOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setIsOver(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h2 className=" mt-8 mb-4">{questions[currentQuestion].question}</h2>
      <div className="flex flex-col gap-4 mt-5 ">
        {questions[currentQuestion].options.map((option) => {
          return (
            <button
              key={option}
              onClick={() => {
                handleOptionClick(option);
              }}
              className="bg-blue-500 hover:bg-blue-700 w-90 text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 "
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Questions;
