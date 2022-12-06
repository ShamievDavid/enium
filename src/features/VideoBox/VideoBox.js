import React, { useState } from "react";
import "./VideoBox.scss";

export const VideoBox = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className={collapsed ? "video_container_active" : "video_container"}>
      <div className="video_left_side" onClick={onCollapse}>
        <div className="arrow-rigth">←</div>
        <div className="learn_more">LEARN MORE</div>
      </div>
      <div className="content">
        <div className="upper_text">
          Enium is dedicated to continually enhancing our service offerings in
          order to achieve the highest level of satisfaction for all our
          customers. We do this by:
        </div>
        <div className="items_box">
          <div className="items">
            <div className="item_title">HOMEOWNERS</div>
            <p className="p_homeowners">
              Ensuring that every Homeowner is in a stronger and better
              financial position than they were before we were introduced.
            </p>
            <p className="item_learn_more">LEARN MORE</p>
          </div>
          <div className="items">
            <div className="item_title">LENDING PARTNERS</div>
            <p>
              Protecting our Lending Partners from unethical contractors and
              keeping them current on changes in the industry.
            </p>
            <p className="item_learn_more">LEARN MORE</p>
          </div>
          <div className="items">
            <div className="item_title">DEALERS</div>
            <p>
              Ensuring every Dealer has the most competitive loan products
              available and the best customer service experience.
            </p>
            <p className="item_learn_more">LEARN MORE</p>
          </div>
        </div>
        <div className="video">
          <img src="./assets/images/video.png" alt="video-screen" />
          <img className="play" src="./assets/images/play.png" alt="play" />
        </div>
      </div>

      {/* <div className="upper-text">
        ENIUM is dedicated to continually enhancing our service offerings in
        order to achieve the highest level of satisfaction for all oui customeis
        We do this by:
      </div>
      <div className="video"></div> */}
    </div>
  );
};
