import React from "react";
import "./App.css";
import Clock from './Components/Clock.js'

function App() {
  return (
    <>
      <div id="appContainer">
        <div id="sidebarContainer" > this the side div</div>
        <div id="clockContainer"> <h3>his is the clock div</h3>
        <Clock />
        </div>
      </div>
    </>
  );
}

export default App;
