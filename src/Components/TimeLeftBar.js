import React, { useState, useEffect, useRef, useContext } from "react";
import clsx from "clsx";
import { ThemeContext } from "./ThemeContext.js";

export default function TimeLeftBar(props) {
  const { timeLeft, startTime, status } = props;
  const [totalTime, setTotalTime] = useState(timeLeft);

  const prevTotalTimeRef = useRef();

  //look this over again, see if you can trim lines.
  useEffect(() => {
    prevTotalTimeRef.current = totalTime;
  });

  useEffect(() => {
    if (!status) {
      setTotalTime(prevTotalTimeRef.current);
    } else {
      setTotalTime(startTime);
    }
  }, [status, timeLeft]);

  if (totalTime < 60) {
    setTotalTime(60);
  }

  //change div length based on proportion of time remaining
  let totalDivLength = 300;
  let remainingDivLength = (timeLeft / totalTime) * totalDivLength;

  let totalDivSize = {
    width: `${totalDivLength}px`,
    height: "5px",
    position: "absolute",
    left: "40%",
  };

  let remainingDivSize = {
    width: `${remainingDivLength}px`,
    height: "5px",
    position: "absolute",
    left: "40%",
  };

  //set bar colors to match theme

  const context = useContext(ThemeContext);

  const remainingDivClasses = clsx({
    cool: context.themeSecondary === "cool",
    warm: context.themeSecondary === "warm",
  });

  const totalDivClasses = clsx({
    purps: context.themeTertiary === "purps",
    pinks: context.themeTertiary === "pinks",
  });

  return (
    <>
      <div
        id="totalTimeDiv"
        style={totalDivSize}
        className={remainingDivClasses}
      ></div>
      <div
        id="timeRemainingDiv"
        style={remainingDivSize}
        className={totalDivClasses}
      ></div>
    </>
  );
}
