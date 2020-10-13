import React, { useState, useEffect} from "react";

export default function RunningViz(props) {
  const { status, timeLeft } = props;


  const [runningColor, setRunningColor] = useState(140);
  const [colorDirection, setColorDirection] = useState("down");


  let maxHue = 197;
  let minHue = 135;
  let hueTimeInterval = 1000 / (maxHue - minHue);


  function hueincrement(prev) {
    if (runningColor >= maxHue) {
      setColorDirection("down");
    }
    if (runningColor <= minHue) {
      setColorDirection("up");
    }
    if (colorDirection === "down") {
      return prev - 1;
    }
    if (colorDirection === "up") {
      return prev + 1;
    }
  }

  useEffect(() => {
    if (!status && timeLeft>0) {
      const timeId = setTimeout(() => {
        setRunningColor((prev) => hueincrement(prev));
      }, hueTimeInterval);
      return () => {
        clearTimeout(timeId);
      };
    }
  });

  

  let divColor = {
    backgroundColor: `hsla(${runningColor}, 100%, 50%, 1)`,
  };




  return (
    <>
      <div style={divColor} id="timeUnderline"></div>

      {/* <p>{!status ? "Clock Running" : "Clock Stopped"}</p> */}
    </>
  );
}
