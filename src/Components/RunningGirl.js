import React, { useState, useEffect } from "react";
import girl from "./girl.gif";

const RunningGirl = (props) => {
  useEffect(() => {
    let id;
    if (props.x < 80 && props.r) {
      id = setTimeout(() => props.setX(props.x + 0.1), 1);
    } else if (props.r && props.verticalLevel === 0) {
      props.setVerticalLevel(props.verticalLevel + 1);
      props.setR(false);
    } else if (props.x > -50 && !props.r) {
      id = setTimeout(() => props.setX(props.x - 0.1), 1);
    } else if (
      !props.r &&
      props.verticalLevel === 1 &&
      (props.length * 12) / 100 > 1
    ) {
      props.setVerticalLevel(props.verticalLevel + 1);
      props.setR(true);
    }
    return () => clearTimeout(id);
  }, [props.x, props.r]);

  return (
    <div
      style={{
        width: "40rem",
        position: "absolute",
        top: `${props.verticalLevel * 20 + 10}rem`,
        left: `${props.x}%`,
        transform: `scaleX(${props.r ? 1 : -1})`,
      }}
    >
      <img src={girl} style={{ width: "100%" }}></img>
    </div>
  );
};

export default RunningGirl;
