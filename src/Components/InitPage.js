import React, { useEffect, useState } from 'react';
import drum1 from './drum1.png';
import drum2 from './drum2.png';
import drumstick from './drumstick.png';

const InitPage = (props) => {
  const [degrees, setDegrees] = useState(0);
  const [r, setR] = useState(true);
  useEffect(() => {
    if (props.sound && degrees < 25 && r) {
      if (degrees > 24) {
        setR(!r);
      }
      setTimeout(setDegrees(degrees + 0.25), 1000);
    }

    if (props.sound && degrees > 0 && !r) {
      if (degrees < 1) {
        setR(!r);
      }
      setTimeout(setDegrees(degrees - 0.25), 1000);
    }
  }, [degrees, props, r]);
  return (
    <>
      <img
        style={{ position: 'absolute', bottom: '10%', width: '25%' }}
        src={drum2}
        alt="drum"
        onClick={() => {
          props.setSound(true);
        }}
      ></img>
      <img
        style={{
          position: 'absolute',
          bottom: '35%',
          width: '10%',
          left: '37.5%',
          transform: `rotate(${degrees}deg)`,
        }}
        src={drumstick}
        alt="stick"
        onClick={() => {
          props.setSound(true);
        }}
      ></img>
    </>
  );
};

export default InitPage;
