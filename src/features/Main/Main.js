import React, { useState } from "react";
import { MyDialog } from "../../components/Dialog/Dialog";
import { Photo } from "../Photo";
import { VideoBox } from "../VideoBox";
import { InfoBox } from "../InfoBox";
import "./Main.scss";
import { ContactForm } from "../ContactForm/ContactForm";

export const Main = ({ showForm, setShowForm }) => {
  return (
    <div className="container">
      <Photo />
      <VideoBox />
      <InfoBox showForm={showForm} setShowForm={setShowForm} />
    </div>
  );
};
