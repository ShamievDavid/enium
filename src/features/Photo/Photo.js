import React from "react";
import "./Photo.scss";

export const Photo = () => {
  return (
    <div className="photo_main">
      <div className="photo-container">
        <img
          className="background_photo"
          src="./assets/images/background.jpg"
          alt="background"
        />
      </div>
    </div>
  );
};
