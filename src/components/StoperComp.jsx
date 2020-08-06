import React, { useState, useEffect } from "react";

import TimeParcial from "./parcials/TimeParcial";

let intervalPtr = undefined;

function StoperComp() {
  let [timeState, setTimeState] = useState(0);
  let [timeArrState, setTimeArrState] = useState([]);

  useEffect(() => {
    console.log("start interval");
    startInterval();
    return () => {
      console.log("clear interval");
      stopInterval();
    };
  }, []);

  useEffect(() => {
    console.log(timeState);
  }, [timeState]);

  let startInterval = () => {
    if (intervalPtr) return;
    // console.log("start interval");
    intervalPtr = setInterval(() => {
      //   console.log("interval tick", timeState);
      setTimeState((timeState) => timeState + 1);
    }, 1000);
  };

  let stopInterval = () => {
    if (intervalPtr) {
      clearInterval(intervalPtr);
      console.log("stop interval");
    }
    intervalPtr = undefined;
  };

  let handleStopClick = () => {
    stopInterval();
    setTimeState(() => 0);
  };

  let handlePauseClick = () => {
    stopInterval();
    let arr = [...timeArrState, timeState];
    setTimeArrState(arr);
  };

  return (
    <div>
      <br />
      <TimeParcial time={timeState} />
      <button
        onClick={() => {
          startInterval();
        }}
      >
        ►
      </button>
      <button onClick={handlePauseClick}>▌▐</button>
      <button onClick={handleStopClick}>██</button>
      <br />
      {timeArrState.map((time) => (
        <TimeParcial key={time + Math.random()} time={time} />
      ))}
    </div>
  );
}

export default StoperComp;
