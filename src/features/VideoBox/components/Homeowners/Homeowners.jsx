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
      <div className="homeowners_header">
        <div className="homeowners_header_right">
          <div className="homeowners_logo">
            <img
              className="homeowners_img_logo"
              src="./assets/images/enium_concept.png"
              alt="enium logo"
            />
          </div>
        </div>

        <div className="homeowners_header_left">
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
      </div>

      <div className="homeowners_content">
        <div className="homeowners_content_right">
          <div className="homeowners_title">HOMEOWNERS</div>
        </div>
        <div className="homeowners_content_left">
          <div className="homeowners_text">
            Renewable energy is attainable and affordable, benefiting homeowners
            financially while contributing to the improvement of the
            environment. Let us help you take advantage of the power that comes
            with renewable energy today.
          </div>
        </div>
      </div>
      <div className="homeowners_footer">
        <div className="homeowners_images_right"></div>
        <div className="homeowners_images_box">
          <div className="homeowners_content_item">
            <img
              className="homeowners_img"
              src="./assets/images/enium_homeowners page_circle_01.png"
              alt="cirlce"
            />
            <div className="homeowners_infobox">
              • Enable energy self-sufficiency
              <br /> • Increase property values by adding energy efficent
              upgrades
              <br /> • Deliver potential cost saving
              <br /> • Align with the public interest in fossil fuel divestment
            </div>
          </div>
          <div className="homeowners_content_item">
            <img
              className="homeowners_img"
              src="./assets/images/enium_homeowners pagecircle_02.png"
              alt="cirlce"
            />
            <div className="homeowners_infobox">
              • Limit Carbon Emission with Green Energy
              <br />
              • Address climate awareness and concerns about climate change
              <br />
              • Improve health by improving air quality
              <br />
            </div>
          </div>
          <div className="homeowners_content_item">
            <img
              className="homeowners_img"
              src="./assets/images/enium_homeowners pagecircle_03.png"
              alt="cirlce"
            />
            <div className="homeowners_infobox">
              <div className="homeowners_column">
                • Strong Government Legislation will encourage private sector
                <br />
                • Public Interest in green technology and renewable energy is
                also driving solar demand
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
