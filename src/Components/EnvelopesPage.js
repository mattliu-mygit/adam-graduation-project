import React, { useEffect, useState } from "react";
import ClosedEnvelope from "./ClosedEnvelope";
import RunningGirl from "./RunningGirl";
import OpenedMessage from "./OpenedMessage";
const ENVELOPES_PER_PERSON = 9;

const EnvelopesPage = (props) => {
  const [mod, setMod] = useState(0);
  useEffect(() => {
    if (props.envelopes.length > 0) {
      setMod(props.envelopes[0][1]);
    }
  }, [props.envelopes]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: "6rem",
        position: "absolute",
        width: "100%",
      }}
    >
      <h1>Envelopes for {props.title}:</h1>
      {props.envelopes.map((envelope, i) => {
        const out = (
          <ClosedEnvelope
            x={envelope[0]}
            verticalLevel={envelope[1] - mod}
            id={((envelope[2] - 1) % ENVELOPES_PER_PERSON) + 1}
            setOpened={props.setOpened}
            open={props.opened}
            name={props.messages[(envelope[2] - 1) % ENVELOPES_PER_PERSON].name}
          />
        );
        return out;
      })}
      <RunningGirl
        x={props.x}
        setX={props.setX}
        verticalLevel={props.verticalLevel}
        setVerticalLevel={props.setVerticalLevel}
        r={props.r}
        setR={props.setR}
        length={props.messages.length}
        // pageNum={props.pageNum}
      />
      {props.opened !== 0 ? (
        <OpenedMessage
          id={props.opened}
          body={props.messages[props.opened - 1]}
          setOpen={props.setOpened}
        />
      ) : null}
    </div>
  );
};

export default EnvelopesPage;
