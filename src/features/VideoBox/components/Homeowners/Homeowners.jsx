import React from "react";
import "./Homeowners.scss";

export const Homeowners = ({
  homeowners,
  setHomeowners,
  showForm,
  setShowForm,
}) => {
  return (
    <div
      className={
        showForm ? "homeowners_container_blur" : "homeowners_container"
      }
    >
      <div className="homeowners_left">
        <div className="homeowners_logo">
          <img
            className="homeowners_img_logo"
            src="./assets/images/enium_white.png"
            alt="enium logo"
          />
        </div>
        <div className="homeowners_title ">HOMEOWNERS</div>
      </div>

      <div className="homeowners_right">
        <div className="homeowners_right_header">
          <div
            className="homeowners_contact"
            onClick={() => setShowForm(!showForm)}
          >
            CONTACT US
          </div>
          <div
            className="homeowner_close"
            onClick={() => setHomeowners(!homeowners)}
          >
            ×
          </div>
        </div>
        <div className="homeowners_right_content">
          <div className="homeowners_rigth_text">
            Renewable energy is attainable and affordable, benefiting homeowners
            financially while contributing to the improvement of the
            environment. Let us help you take advantage of the power that comes
            with renewable energy today.
          </div>
          <div className="homeowners_rigth_images_box">
            <img
              className="homeowners_img"
              src="./assets/images/enium_homeowners page_circle_01.png"
              alt="cirlce"
            />
            <img
              className="homeowners_img"
              src="./assets/images/enium_homeowners pagecircle_02.png"
              alt="cirlce"
            />
            <img
              className="homeowners_img"
              src="./assets/images/enium_homeowners pagecircle_03.png"
              alt="cirlce"
            />
          </div>
          <div className="homeowners_rigth_infobox">
            <div className="homeowners_column">
              • Enable energy self-sufficiency
              <br /> • Increase property values by adding energy efficent
              upgrades
              <br /> • Deliver potential cost saving
              <br /> • Align with the public interest in fossil fuel divestment
            </div>

            <div className="homeowners_column">
              • Limit Carbon Emission with Green Energy
              <br />
              • Address climate awareness and concerns about climate change
              <br />
              • Improve health by improving air quality
              <br />
            </div>

            <div className="homeowners_column">
              • Strong Government Legislation will encourage private sector
              <br />
              • Public Interest in green technology and renewable energy is also
              driving solar demand
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
