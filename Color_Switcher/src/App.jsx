import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [bgColor, setBgColor] = useState("white");
  const colors = ["red", "blue", "green", "yellow", "purple"];

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="min-h-screen w-full flex flex-col items-center justify-center transition-colors duration-300"
    >
      <h1 className="text-4xl font-bold mb-8">
        🎨 Color Switcher
      </h1>

      <div className="flex flex-wrap justify-center gap-4">
        {colors.map((item) => (
          <Button
            key={item}
            color={item}
            onClick={() => setBgColor(item)}
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default App;