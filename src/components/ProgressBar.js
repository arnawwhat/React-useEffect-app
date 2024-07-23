import { useState, useEffect } from "react";
export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10); // here we are not clearing the interval. so use the cleanup
    //function of useEffect();
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
