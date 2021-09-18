import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("hello");
  const [isMouseOver, setMouseOver] = useState("false");
  function handleClick() {
    setHeadingText("submitted");
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function mouseOutEvent() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={mouseOutEvent}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
