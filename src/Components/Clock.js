import clsx from 'clsx'
import React, { useState, useRef, useEffect, useContext } from "react";
import RunningViz from "./RunningViz.js";
import WarningViz from "./WarningViz.js";
import {ThemeContext} from './ThemeContext.js'




export default function Clock(props) {
  const { startTime } = props;
  const [status, setStatus] = useState(true);
  const [runningTimeSec, setRunningTimeSec] = useState(startTime);

  const context= useContext(ThemeContext)

  const increment = useRef(null);

  useEffect(() => {
      if(status){
        setRunningTimeSec(startTime)
      }

    
  }, [startTime]);

  const classes = clsx({
    blues: context.theme==='blues', 
    reds:  context.theme==='reds'
  })






  //functions for starting and stopping clock
  const handleStartClock = () => {
    increment.current = setInterval(() => {
      setRunningTimeSec((time) => time - 1);
    }, 1000);
  };

  const handleStopClock = () => {
    clearInterval(increment.current);
  };

  function statusChange() {
    setStatus(!status);
  }

  function startButtonFunction() {
    statusChange();
    if (status) {
      handleStartClock();
    } else {
      handleStopClock();
    }
  }

  function handleResetClick() {
    setRunningTimeSec(startTime);
    setStatus(true);
    handleStopClock();
  }

  function formatTime(runningTime) {
    let minutes = Math.floor(runningTime / 60);
    let seconds = runningTime % 60;
    if (seconds < 10 && seconds >= 0) {
      return `${minutes}: 0${seconds}`;
    } else if (seconds < 0) {
      return `0:00`;
    }
    return `${minutes}: ${seconds}`;
  }
  
let timeOutColor = {
  color: 'red'
}

let runningTimeColor = {
  color: 'black'
}

  
  return (
    <>
      <div className={classes}>
      {/* <div> */}
        <p  style={runningTimeSec===0?timeOutColor :runningTimeColor}>{formatTime(runningTimeSec)}</p>
        <RunningViz status={status} timeLeft={runningTimeSec} />
        <button onClick={startButtonFunction}>
          {" "}
          {status ? "Start" : "Stop"}{" "}
        </button>

        <button onClick={handleResetClick}> Reset </button>
        <WarningViz status={status} timeLeft={runningTimeSec} />
      </div>
    </>
  );
}
