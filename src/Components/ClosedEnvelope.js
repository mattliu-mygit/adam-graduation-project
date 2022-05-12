import React from "react";
import cat from "./lion1.png";
import OpenEnvelope from "./OpenEnvelope";

const ClosedEnvelope = (props) => {
  const clicked = () => {
    props.setOpened(props.id);
  };
  return (
    <>
      {props.open !== props.id ? (
        <div
          onClick={clicked}
          // onMouseOver={() => {
          //   props.setOpened(props.id);
          // }}
        >
          <div
            style={{
              backgroundColor: "rgb(206, 48, 57)",
              width: "14rem",
              height: "24rem",
              position: "absolute",
              top: `${props.verticalLevel * 25 + 6}rem`,
              left: `${props.x}%`,
              borderRadius: "8px",
              border: "solid",
              borderWidth: "0.3rem",
              borderTop: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "rgb(206, 48, 57)",
                width: "80%",
                height: "90%",
                borderTop: "none",
                margin: "9%",
                border: "solid",
                borderRadius: "5px",
                borderBottomLeftRadius: "5px",
                borderColor: "rgb(255, 235, 100)",
                position: "absolute",
                bottom: "0%",
              }}
            ></div>
            <img
              src={cat}
              style={{
                position: "absolute",
                bottom: "3rem",
                left: "0rem",
                width: "14rem",
              }}
            ></img>
            <div
              style={{
                background: "rgb(255, 235, 100)",
                borderRadius: "0 0 5rem 5rem",
                border: "solid",
                borderColor: "black",
                position: "absolute",
                top: "0%",
                left: "-2.5%",
                width: "102%",
                height: "18%",
              }}
            ></div>
            <div
              style={{
                background: "rgb(206, 48, 57)",
                borderRadius: "0 0 4rem 4rem",
                position: "absolute",
                top: "1%",
                left: "1%",
                width: "98%",
                height: "17%",
              }}
            ></div>
            <div
              style={{
                color: "gold",
                position: "absolute",
                top: "7rem",
              }}
            >
              {props.name}
            </div>
          </div>
        </div>
      ) : (
        <>
          <OpenEnvelope
            x={props.x}
            verticalLevel={props.verticalLevel}
            setOpened={props.setOpened}
            index={props.index}
            name={props.name}
          />
        </>
      )}
    </>
  );
};

export default ClosedEnvelope;
