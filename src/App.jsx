import React, { useState } from "react";
import "./App.css";
import StoperComp from "./components/StoperComp";
import StoperCompClass from "./components/StoperCompClass";

function App() {
  let [stpState, setStpState] = useState(true);
  return (
    <div className="App">
      <button
        onClick={() => {
          setStpState(!stpState);
        }}
      >
        toggle
      </button>
      {stpState && <StoperComp />}
      {/* <StoperCompClass /> */}
    </div>
  );
}

export default App;
