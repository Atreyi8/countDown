import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(59);

  const resetTimer = () => {
    setSeconds(59);
    setMinutes(30);
  };

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [seconds, minutes]);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="timerbox">
        <p className="timer">
          Time Left = {minutes > 10 ? minutes : `0${minutes}`} :{" "}
          {seconds > 10 ? seconds : `0${seconds}`}
        </p>
      </div>
      <div className="buttonContainer">
        <button className="resetButton" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}
