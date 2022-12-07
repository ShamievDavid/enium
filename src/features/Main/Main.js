import React from "react";
import { Photo } from "../Photo";
import { VideoBox } from "../VideoBox";
import { InfoBox } from "../InfoBox";
import "./Main.scss";

export const Main = ({ showForm, setShowForm }) => {
  return (
    <div className={showForm ? "container_main_blur" : "container_main"}>
      <Photo />
      <VideoBox />
      <InfoBox showForm={showForm} setShowForm={setShowForm} />
    </div>
  );
};
