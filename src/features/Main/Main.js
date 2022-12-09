import React from "react";
import { Photo } from "../Photo";
import { VideoBox } from "../VideoBox";
import { InfoBox } from "../InfoBox";
import "./Main.scss";

export const Main = ({
  showForm,
  setShowForm,
  homeowners,
  setHomeowners,
  lendingPartners,
  setLendingPartners,
  dealers,
  setDealers,
}) => {
  return (
    <div className={showForm ? "container_main_blur" : "container_main"}>
      <Photo />
      <VideoBox
        homeowners={homeowners}
        setHomeowners={setHomeowners}
        lendingPartners={lendingPartners}
        setLendingPartners={setLendingPartners}
        dealers={dealers}
        setDealers={setDealers}
      />
      <InfoBox showForm={showForm} setShowForm={setShowForm} />
    </div>
  );
};
