import { useState, useEffect } from "react";

function Timer({ isover, setIsOver }) {
  const [leftTime, setLeftTime] = useState(70);
  const [displayTime, setDisplayTime] = useState("");

  // left time logic
  useEffect(() => {
    if(isover) return;
    let interval = setInterval(() => {
      setLeftTime((prev) => {
        if (prev <=0) {
          clearInterval(interval);
          setIsOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isover, setIsOver]);

  //time format logic
  useEffect(() => {
    let timeString = `${Math.floor(leftTime / 60)
      .toString()
      .padStart(2, "0")}:${(leftTime % 60).toString().padStart(2, "0")}`;
    setDisplayTime(timeString);
  }, [leftTime]);

  return <div>🕐 Timer: {displayTime}</div>;
}
export default Timer;
