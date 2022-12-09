import React from "react";
import "./Dealers.scss";

export const Dealers = ({ dealers, setDealers, showForm, setShowForm }) => {
  return (
    <div className={showForm ? "dealers_container_blur" : "dealers_container"}>
      <div className="dealers_left">
        <div className="dealers_logo">
          <img
            className="dealers_img_logo"
            src="./assets/images/enium_white.png"
            alt="enium logo"
          />
        </div>
        <div className="dealers_title ">DEALERS</div>
      </div>

      <div className="dealers_right">
        <div className="dealers_right_header">
          <div
            className="dealers_contact"
            onClick={() => setShowForm(!showForm)}
          >
            CONTACT US
          </div>
          <div className="dealers_close" onClick={() => setDealers(!dealers)}>
            ×
          </div>
        </div>
        <div className="dealers_right_content">
          <div className="dealers_rigth_text">
            Ensuring every dealer has the most competitive loan
            productsavailable with the best customer service experience
            possible. <br />
            <br />
            At Enium, we are proud to work with dealers as committed to
            excellent customer service as we are. Creating strong partnerships
            between homeowners and the best solar dealers in the country is what
            we do best.
          </div>
          <div className="dealers_rigth_images_box">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="dealers_rigth_footer">
            <div className="dealers_rigth_footer_title">
              What our partners are saying about us:
            </div>
            <div className="dealers_rigth_footer_content">
              <div className="dealers_rigth_footer_content_left">
                “This is my first sales job selling anything expencive enough to
                need financing. I was so worried about being able to understand
                everything. Prior to today`s conference, I felt in way over my
                head. But this is a piece of cake. I feel like I`m walking on
                sunshine.” <br />
                <span>— Enium partner</span>
              </div>
              <div className="dealers_rigth_footer_content_right">
                “I am truly thankful for the way Enium has been able to help me.
                I have been able togo into homes confident that I am getting the
                best deal and price per wattage.”
                <span>— Enium partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
