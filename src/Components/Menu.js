import React, { useState } from "react";

const menuButton = {
  border: "solid",
  backgroundColor: "rgba(200, 50, 25, 0.5)",
  borderColor: "rgba(225, 50, 25, 0.5)",
  padding: "1rem",
  fontSize: "150%",
  color: "gold",
};

const Menu = (props) => {
  const [hide, setHide] = useState(false);
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: "5%",
        zIndex: "10000000",
      }}
      onMouseEnter={() => {
        setHide(true);
      }}
      onMouseLeave={() => {
        setHide(false);
      }}
    >
      {hide ? (
        <>
          <div
            onClick={() => {
              props.setPageNum(0);
            }}
            style={{
              ...menuButton,
              backgroundColor: `${
                props.pageNum === 0
                  ? "rgba(255, 50, 25, 0.5)"
                  : "rgba(170, 50, 25, 0.5)"
              }`,
            }}
          >
            {"π―πΎπππ π«πΆππ"}
          </div>
          <b
            style={{
              backgroundColor: "rgba(200, 50, 25, 0.5)",
              border: "solid",
              borderColor: "rgba(200, 50, 25,1)",
              position: "absolute",
              width: "0.75rem",
              right: "-3rem",
              color: "gold",
              fontSize: "150%",
              padding: "1rem",
            }}
          >
            {"}"}
          </b>
          <div
            onClick={() => {
              props.setPageNum(1);
            }}
            style={{
              ...menuButton,
              backgroundColor: `${
                props.pageNum === 1
                  ? "rgba(255, 50, 25, 0.5)"
                  : "rgba(170, 50, 25, 0.5)"
              }`,
            }}
          >
            {"π«π½πππππππ"}
          </div>
          <div
            onClick={() => {
              props.setPageNum(2);
            }}
            style={{
              ...menuButton,
              backgroundColor: `${
                props.pageNum === 2
                  ? "rgba(255, 50, 25, 0.5)"
                  : "rgba(170, 50, 25, 0.5)"
              }`,
            }}
          >
            {"ππΈπ» ππ­πͺπΆ"}
          </div>
          <div
            onClick={() => {
              props.setPageNum(3);
            }}
            style={{
              ...menuButton,
              backgroundColor: `${
                props.pageNum === 3
                  ? "rgba(255, 50, 25, 0.5)"
                  : "rgba(170, 50, 25, 0.5)"
              }`,
            }}
          >
            {"ππΈπ» ππ·π·πͺ"}
          </div>
          <div
            onClick={() => {
              props.setPageNum(4);
            }}
            style={{
              ...menuButton,
              backgroundColor: `${
                props.pageNum === 4
                  ? "rgba(255, 50, 25, 0.5)"
                  : "rgba(170, 50, 25, 0.5)"
              }`,
            }}
          >
            {"ππΈπ» ππͺπ»πΈπ΅"}
          </div>
          <div
            onClick={() => {
              props.setPageNum(5);
            }}
            style={{
              ...menuButton,
              backgroundColor: `${
                props.pageNum === 5
                  ? "rgba(255, 50, 25, 0.5)"
                  : "rgba(170, 50, 25, 0.5)"
              }`,
            }}
          >
            {"ππΈπ» ππͺπ¬π΄"}
          </div>
          <div
            onClick={() => {
              props.setPageNum(6);
            }}
            style={{
              ...menuButton,
              backgroundColor: `${
                props.pageNum === 6
                  ? "rgba(255, 50, 25, 0.5)"
                  : "rgba(170, 50, 25, 0.5)"
              }`,
            }}
          >
            {"ππΈπ» ππ?πΏπ²π·"}
          </div>
          <div
            onClick={() => {
              props.setPageNum(7);
            }}
            style={{
              ...menuButton,
              backgroundColor: `${
                props.pageNum === 7
                  ? "rgba(255, 50, 25, 0.5)"
                  : "rgba(170, 50, 25, 0.5)"
              }`,
            }}
          >
            {"ππΈπ» π’πͺπ«π»π²π·πͺ"}
          </div>
        </>
      ) : (
        <b
          style={{
            backgroundColor: "rgba(200, 50, 25, 0.5)",
            border: "solid",
            borderColor: "rgba(200, 50, 25,1)",
            position: "absolute",
            width: "0.75rem",
            right: "-3rem",
            color: "gold",
            fontSize: "150%",
            padding: "1rem",
            top: "4.5rem",
          }}
        >
          {"}"}
        </b>
      )}
    </div>
  );
};

export default Menu;
