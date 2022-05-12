import React, { useEffect, useState } from "react";
import photos from "../photos";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import frame from "./frame.png";

const img = {
  objectFit: "cover",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};

const PhotoReelPage = () => {
  const producePhotos = () => {
    const imageArr = [];
    photos.forEach((photo) => {
      imageArr.push(
        <div style={img}>
          <img
            src={photo}
            alt="sliderimg"
            id="slidImg"
            style={{
              height: window.innerHeight / 1.5,
            }}
          ></img>
        </div>
      );
    });
    return imageArr;
  };
  return (
    <div
      style={{
        height: window.innerHeight / 1.25,
        paddingTop: "1%",
        paddingBottom: "2%",
        position: "absolute",
        width: "100%",
        top: "6rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        zIndex: "1000",
      }}
    >
      <AliceCarousel
        autoPlay
        autoPlayInterval="3000"
        infinite="true"
        disableButtonsControls="true"
        items={producePhotos()}
        autoPlayStrategy="none"
      ></AliceCarousel>
    </div>
  );
};

export default PhotoReelPage;
