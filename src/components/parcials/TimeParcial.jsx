import React from "react";

function TimeParcial(props) {
  let showTime = () => {
    let min = Math.floor(props.time / 60);
    let sec = props.time - min * 60;
    return `${min}:${sec}`;
  };
  return <div>{showTime()}</div>;
}

export default TimeParcial;
