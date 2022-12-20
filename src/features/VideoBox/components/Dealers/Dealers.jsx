import React from "react";
import "./Dealers.scss";

export const Dealers = ({ dealers, setDealers, showForm, setShowForm }) => {
  return (
    <div className={showForm ? "dealers_container_blur" : "dealers_container"}>
      <div className="dealers_header">
        <div className="dealers_header_left">
          <div className="dealers_logo">
            <img
              className="dealers_img_logo"
              src="./assets/images/enium_concept.png"
              alt="enium logo"
            />
          </div>
        </div>

        <div className="dealers_header_right">
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
      </div>
      <div className="dealers_content">
        <div className="dealers_content_left">
          <div className="dealers_title">DEALERS</div>
        </div>
        <div className="dealers_content_right">
          <div className="dealers_rigth_text">
            Ensuring every dealer has the most competitive loan
            productsavailable with the best customer service experience
            possible. At Enium, we are proud to work with dealers as committed
            to excellent customer service as we are. Creating strong
            partnerships between homeowners and the best solar dealers in the
            country is what we do best.
          </div>
        </div>
      </div>
      <div className="dealers_bottom">
        <div className="dealers_bottom_left"></div>
        <div className="dealers_footer">
          <div className="dealers_footer_title">
            What our partners are saying about us:
          </div>
          <div className="dealers_footer_content">
            <div className="dealers_footer_content_item">
              “This is my first sales job selling anything expencive enough to
              need financing. I was so worried about being able to understand
              everything. Prior to today`s conference, I felt in way over my
              head. But this is a piece of cake. I feel like I`m walking on
              sunshine.”
            </div>
            <div className="dealers_footer_content_item">
              “I am truly thankful for the way Enium has been able to help me. I
              have been able togo into homes confident that I am getting the
              best deal and price per wattage.”
            </div>
            <div className="dealers_footer_content_item_last">
              "Financine with has changedour business and mav he our sinole most
              imnortant partnershin. They are different than other solar
              financino companies hecause theu understand thabnsi. ness from the
              solar companies perspective. Thev put the customer expirience
              first which trans- lates to sand thine for us."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
