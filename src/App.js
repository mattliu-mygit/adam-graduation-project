import React, { useState, useEffect } from "react";
import "./App.css";
import background from "./background.jpg";
import performance6 from "./photos/performance6.png";
import sevenStar from "./sevenStar.mp3";
import ReactAudioPlayer from "react-audio-player";
import messages from "./messages";
import PhotoReelPage from "./Components/PhotoReelPage";
import EnvelopesPage from "./Components/EnvelopesPage";
import Menu from "./Components/Menu";
import InitPage from "./Components/InitPage";
import photos from "./photos";
const ENVELOPES_PER_PERSON = 9;

function App() {
  const [sound, setSound] = useState(false);
  const [verticalLevel, setVerticalLevel] = useState(0);
  const [x, setX] = useState(-30);
  const [envelopes, setEnvelopes] = useState([]);
  const [lastPushed, setLastPushed] = useState(0);
  const [r, setR] = useState(true);
  const [opened, setOpened] = useState(0);
  const [height, setHeight] = useState(window.visualViewport.height);
  const [rBorder, setRBorder] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const [passedOver, setPassedOver] = useState(0);

  useEffect(() => {
    const calced = ((messages.length + 2) * 15) % window.visualViewport.width;
    const convertedHeight =
      ((calced + 1) * 24) / 3 > window.visualViewport.height
        ? (calced * 24) / 3
        : window.visualViewport.height;
    setHeight(convertedHeight);
  }, []);

  useEffect(() => {
    if (
      !(parseInt(x) % 15) &&
      parseInt(x) !== lastPushed &&
      x > 5 &&
      envelopes.length < ENVELOPES_PER_PERSON
    ) {
      setRBorder(false);
      setLastPushed(parseInt(x));
      setEnvelopes([
        ...envelopes,
        [x - 5, verticalLevel, envelopes.length + 1],
      ]);
    } else if (!(parseInt(x) % 15) && !r && x > 74 && !rBorder) {
      setRBorder(true);
      setEnvelopes([
        ...envelopes,
        [x - 5, verticalLevel, envelopes.length + 1],
      ]);
    }
  }, [x, verticalLevel, pageNum]);

  useEffect(() => {
    if (sound && pageNum === 0 && passedOver === 0) {
      setTimeout(() => {
        if (pageNum === 0) {
          setPassedOver(1);
          setPageNum(1);
        } else {
          setPassedOver(-1);
        }
      }, 3000);
    } else if (sound && pageNum === 1 && passedOver === 1) {
      setTimeout(() => {
        if (pageNum === 1) {
          setPassedOver(2);
          setPageNum(2);
        } else {
          setPassedOver(-1);
        }
      }, 3400 * photos.length);
    } else {
      setEnvelopes([]);
      setVerticalLevel(0);
      setX(-30);
      setR(true);
      setOpened(0);
      setRBorder(false);
      setLastPushed(0);
      setPassedOver(0);
    }
  }, [sound, pageNum]);

  return (
    <>
      <div
        className="App"
        style={{
          width: "100%",
          height: height,
          position: "absolute",
          background: "transparent",
        }}
        onClick={() => {
          setOpened(0);
        }}
      ></div>
      <div
        className="App"
        style={{
          width: "100%",
          height: height,
          background: `linear-gradient(rgba(255, 105, 100, 0.7), rgba(222, 193, 0, 0.5)), url(${performance6})`,
          // backgroundColor: "rgba(255, 105, 100, 0.7)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPositionY: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0rem",
        }}
      >
        {sound ? (
          <ReactAudioPlayer
            src={sevenStar}
            autoPlay={true}
            controls={false}
            loop={true}
            preload
          />
        ) : null}
        <div
          style={{
            fontSize: "300%",
            textAlign: "center",
            color: "#DBA514",
            backgroundColor: "rgba(100, 0, 0, 0.5)",
            position: "absolute",
            width: "100%",
            top: "0rem",
            height: "6rem",
            display: "flex",
            justifyContent: "center",
            margin: "0rem",
          }}
        >
          <img
            src={background}
            style={{
              width: "100%",
              height: "6rem",
              opacity: "0.4",
              zIndex: "100",
              objectFit: "cover",
              objectPosition: "50% 40%",
              position: "absolute",
              left: "0rem",
              top: "0rem",
            }}
            alt="lab1"
          ></img>
          <div
            style={{
              zIndex: "10000",
              position: "absolute",
              paddingTop: "0.5rem",
            }}
          >
            𝓗𝓪𝓹𝓹𝔂 𝓖𝓻𝓪𝓭𝓾𝓪𝓽𝓲𝓸𝓷, 𝓢𝓮𝓷𝓲𝓸𝓻𝓼!
          </div>
        </div>
        {pageNum === 1 ? (
          <PhotoReelPage />
        ) : pageNum === 2 ? (
          <EnvelopesPage
            title="Adam"
            setOpened={setOpened}
            x={x}
            messages={messages.slice(
              0 * ENVELOPES_PER_PERSON,
              ENVELOPES_PER_PERSON * 1
            )}
            opened={opened}
            setX={setX}
            verticalLevel={verticalLevel}
            setVerticalLevel={setVerticalLevel}
            r={r}
            setR={setR}
            envelopes={envelopes}
            // personMod={ENVELOPES_PER_PERSON}
          />
        ) : pageNum === 3 ? (
          <EnvelopesPage
            title="Anna"
            setOpened={setOpened}
            x={x}
            messages={messages.slice(
              1 * ENVELOPES_PER_PERSON,
              ENVELOPES_PER_PERSON * 2
            )}
            opened={opened}
            setX={setX}
            verticalLevel={verticalLevel}
            setVerticalLevel={setVerticalLevel}
            r={r}
            setR={setR}
            envelopes={envelopes}
          />
        ) : pageNum === 4 ? (
          <EnvelopesPage
            title="Carol"
            setOpened={setOpened}
            x={x}
            messages={messages.slice(
              2 * ENVELOPES_PER_PERSON,
              ENVELOPES_PER_PERSON * 3
            )}
            opened={opened}
            setX={setX}
            verticalLevel={verticalLevel}
            setVerticalLevel={setVerticalLevel}
            r={r}
            setR={setR}
            envelopes={envelopes}
          />
        ) : pageNum === 5 ? (
          <EnvelopesPage
            title="Jack"
            setOpened={setOpened}
            x={x}
            messages={messages.slice(
              3 * ENVELOPES_PER_PERSON,
              ENVELOPES_PER_PERSON * 4
            )}
            opened={opened}
            setX={setX}
            verticalLevel={verticalLevel}
            setVerticalLevel={setVerticalLevel}
            r={r}
            setR={setR}
            envelopes={envelopes}
          />
        ) : pageNum === 6 ? (
          <EnvelopesPage
            title="Kevin"
            setOpened={setOpened}
            x={x}
            messages={messages.slice(
              4 * ENVELOPES_PER_PERSON,
              ENVELOPES_PER_PERSON * 5
            )}
            opened={opened}
            setX={setX}
            verticalLevel={verticalLevel}
            setVerticalLevel={setVerticalLevel}
            r={r}
            setR={setR}
            envelopes={envelopes}
          />
        ) : pageNum === 7 ? (
          <EnvelopesPage
            title="Sabrina"
            setOpened={setOpened}
            x={x}
            messages={messages.slice(
              5 * ENVELOPES_PER_PERSON,
              ENVELOPES_PER_PERSON * 6
            )}
            opened={opened}
            setX={setX}
            verticalLevel={verticalLevel}
            setVerticalLevel={setVerticalLevel}
            r={r}
            setR={setR}
            envelopes={envelopes}
          />
        ) : (
          <InitPage setSound={setSound} sound={sound} />
        )}
        <Menu setPageNum={setPageNum} pageNum={pageNum} />
      </div>
      <div
        style={{
          position: "absolute",
          right: "2.5rem",
          bottom: "2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "1.5rem",
          zIndex: "999999999999",
        }}
        onClick={() => {
          setSound(!sound);
        }}
      >
        <b>Turn {sound ? "off" : "on"} sound.</b>
      </div>
    </>
  );
}

export default App;
