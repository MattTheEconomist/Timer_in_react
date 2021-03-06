import React, { useState, useContext} from "react";
import "./App.css";
import Clock from "./Components/Clock.js";
import {ThemeContext, ThemeProvider} from './Components/ThemeContext.js'
import ThemeButton from './Components/ThemeButton'
import ButtonTime from './Components/TimeAdjButton'; 
import TimeLeftBar from './Components/TimeLeftBar.js'

function App() {
  const [timeMin, setTimeMin] = useState(5);


  const context = useContext(ThemeContext);



  let timeSec = timeMin*60

  function handleInc() {
    console.log('yo')
    setTimeMin(timeMin + 1);
  }

  function handleDec() {
    setTimeMin(timeMin - 1);
  }

  const decText = "-"
  const incText = "+"


  return (
    <>
      <div id="appContainer">
        <div id="sidebarContainer">

          <ButtonTime action={handleInc} value={incText} id="incButton" />
          <ButtonTime action={handleDec} className='poop' value={decText} id="decButton" />
          <p id="startingTimeText">Starting Time</p>
          <p id="startingTimeNumber">{timeMin}</p>
          <ThemeButton value={"Toggle Theme"}/>
        </div>
        <div id="clockContainer">
          {" "}
          <h3>Countdown Clock</h3>
          <Clock startTime={timeSec} />

          


        </div>
      </div>
    </>
  );
}

export default App;
