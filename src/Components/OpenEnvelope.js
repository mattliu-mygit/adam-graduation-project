import React, { useEffect } from 'react';
import cat from './lion1.png';

const OpenEnvelope = (props) => {
  return (
    <div
      onClick={() => {
        console.log('resetting');
        props.setOpened(0);
      }}
      // onMouseLeave={() => {
      //   props.setOpened(0);
      // }}
    >
      <div
        style={{
          backgroundColor: 'rgb(206, 48, 57)',
          width: '14rem',
          height: '24rem',
          position: 'absolute',
          top: `${props.verticalLevel * 25 + 10}rem`,
          left: `${props.x}%`,
          borderRadius: '8px',
          border: 'solid',
          borderWidth: '0.3rem',
          zIndex: '10000000001',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: 'rgb(206, 48, 57)',
            width: '80%',
            height: '80%',
            borderTop: 'none',
            margin: '9%',
            border: 'solid',
            borderRadius: '5px',
            borderBottomLeftRadius: '5px',
            borderColor: 'rgb(255, 235, 100)',
            position: 'absolute',
            zIndex: '10000000001',
            bottom: '0%',
          }}
        ></div>
        <div
          style={{
            background: 'rgb(206, 48, 57)',
            width: '82.5%',
            height: '30%',
            borderRadius: '45%',
            borderBottom: 'solid',
            borderBottomColor: 'rgb(255, 235, 100)',
            position: 'absolute',
            top: '-5.5%',
            borderBottomWidth: '0.25rem',
            zIndex: '10000000001',
            left: '9.5%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              color: 'gold',
              position: 'absolute',
              top: '8.5rem',
            }}
          >
            {props.name}
          </div>
          <img
            src={cat}
            style={{
              position: 'absolute',
              bottom: '-14.75rem',
              left: '-1.3rem',
              width: '14rem',
            }}
            alt="watermark"
          ></img>
        </div>
        <div
          style={{
            background: 'rgb(206, 48, 57)',
            width: '101.5%',
            height: '33.3333%',
            borderRadius: '50%',
            zIndex: '10000000000',
            border: 'solid',
            borderColor: 'black',
            position: 'absolute',
            top: '-18%',
            left: '-2%',
            borderWidth: '0.2rem',
          }}
        ></div>
      </div>
    </div>
  );
};

export default OpenEnvelope;
