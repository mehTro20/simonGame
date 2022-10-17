import React, { useState } from "react";
import "./App.css";

const App = () => {
  // const [buttons, setButtons] = useState(["A", "B", "C", "D"]);
  const [cpuStart, setCpuStart] = useState("");


  const keys = () => {
    const keyList = [
      {id: 0, className: "green"},
      {id: 1, className: "red"},
      {id: 2, className: "yellow"},
      {id: 3, className: "blue "}
    ]

    return keyList.map(x => <button>{x.className}</button>)
  };
  return (
    <div className="App">
      <div>
        <h1>SIMON</h1>
      </div>
      <div className="start-btn">
        <button>Start</button>
      </div>
      <div className="Colours">
        {/* {keys} */}
        <button className="green"></button>
        <button className="red"></button>
        <button className="yellow"></button>
        <button className="blue"></button>
      </div>
    </div>
  );
};

export default App;
