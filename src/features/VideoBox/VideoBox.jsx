import React, { useState } from "react";
import "./VideoBox.scss";

export const VideoBox = ({
  homeowners,
  setHomeowners,
  lendingPartners,
  setLendingPartners,
  dealers,
  setDealers,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={collapsed ? "video_container_active" : "video_container"}>
      <div className="video_bookmark" onClick={onCollapse}>
        <div className="arrow-rigth">←</div>
        <div className="learn_more">LEARN MORE</div>
      </div>
      <div className="content">
        <div className="upper_text">
          Enium is dedicated to continually enhancing our service offerings in
          order to achieve the highest level of satisfaction for all our
          customers.
          <br /> We do this by:
        </div>
        <div className="items_box">
          <div className="item_lending">
            <div className="item_title">LENDING PARTNERS</div>
            <p>
              Protecting our Lending Partners from unethical contractors and
              keeping them current on changes in the industry.
            </p>
            <div
              className="item_learn_more"
              onClick={() => setLendingPartners(!lendingPartners)}
            >
              LEARN MORE
            </div>
          </div>
          <div className="item_homeowners">
            <div className="item_title">HOMEOWNERS</div>
            <p className="paragraph_homeowners">
              Ensuring that every Homeowner is in a stronger and better
              financial position than they were before we were introduced.
            </p>
            <div
              className="item_learn_more"
              onClick={() => setHomeowners(!homeowners)}
            >
              LEARN MORE
            </div>
          </div>

          <div className="item_dealers">
            <div className="item_title">DEALERS</div>
            <p>
              Ensuring every Dealer has the most competitive loan products
              available and the best customer service experience.
            </p>
            <div
              className="item_learn_more"
              onClick={() => setDealers(!dealers)}
            >
              LEARN MORE
            </div>
          </div>
        </div>
        <div className="video">
          <img
            className="video_img"
            src="./assets/images/video.jpg"
            alt="video-screen"
          />
        </div>
      </div>
    </div>
  );
};
