import React, { useState, useEffect, useRef } from "react";

export default function WarningViz(props) {
  const { status, timeLeft } = props;

  const [warningText, setWarningText] = useState("");
  const [runningColor, setRunningColor] = useState(56);
  const [hideWarningDiv, setHideWarningDiv] = useState('hidden')

  // if(!status){
  //     setWarningText('')
  // }



  // if(!status){
  //     return null
  // }

  useEffect(()=>{
      if(!status && timeLeft<60){
          setHideWarningDiv('visible')
      }else{
          setHideWarningDiv('hidden')
      }
    //   console.log(hideWarningDiv)
  },[status, timeLeft])



  useEffect(() => {
    if (timeLeft > 60) {
      setWarningText("");
    } else if (timeLeft < 60 && timeLeft > 30) {
      setWarningText("One Minute Remining!");
      setRunningColor(56);
    } else if (timeLeft < 30 && timeLeft > 10) {
      setWarningText("Thirty Seconds Remining!");
      setRunningColor(39);
    } else if (timeLeft < 10 && timeLeft>2) {
      setRunningColor(3);
      setWarningText("TEN SECONDS LEFT!!");
    }else if(timeLeft<=1){
        setWarningText("TIME'S UP!");
    }


  }, [timeLeft]);

  let divColor = {
    backgroundColor: `hsla(${runningColor}, 100%, 50%, 1)`,
    visibility: `${hideWarningDiv}`

  };

  return (
    <div style={divColor} id="warningDiv">
      <p>{!status ? warningText : ""}</p>
    </div>
  );
}
