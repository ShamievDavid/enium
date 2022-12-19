import React from "react";
import "./LendingPartners.scss";

export const LendingPartners = ({
  lendingPartners,
  setLendingPartners,
  showForm,
  setShowForm,
}) => {
  return (
    <div className={showForm ? "lending_container_blur" : "lending_container"}>
      <div className="lending_bg">
        <img
          className="lending_bg_img"
          alt="homeowners bg"
          src="./assets/images/enium_lending_partners_bg.jpg"
        />
      </div>
      <div className="lending_header">
        <div className="lending_header_right">
          <div className="lending_logo">
            <img
              className="lending_img_logo"
              src="./assets/images/enium_concept.png"
              alt="enium logo"
            />
          </div>
        </div>
        <div className="lending_header_left">
          <div
            className="lending_contact"
            onClick={() => setShowForm(!showForm)}
          >
            CONTACT US
          </div>
          <div
            className="lending_close"
            onClick={() => setLendingPartners(!lendingPartners)}
          >
            ×
          </div>
        </div>
      </div>

      <div className="lending_content">
        <div className="lending_content_right">
          <div className="lending_title ">LENDING PARTNERS</div>
        </div>
        <div className="lending_content_left">
          <div className="lending_text">
            Enium is always looking for forward thinking, innovative lending
            partners to expand our offering as we grow. Today, solar energy is
            attainable and affordable, benefiting you financially in the long
            run while also benefiting the environment. Solar is the key to
            energy freedom, a booming economy and a healthier planet.
          </div>
          <div className="lending_images_box">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="lending_infobox">
            {/* <div className="lending_text_img_box">
              <img
                alt="text"
                className="lending_text_img"
                src="./assets/images/enium_web-site_mobile_text_lending partners.png"
              />
            </div> */}
            <div className="lending_infobox_items">
              <div className="lending_item_header">
                <div className="lending_item_number">1</div>
                <div className="lending_item_line"></div>
              </div>
              <div className="lending_item_text">
                Constant flow of high quality loans of super-prime borrowers.
              </div>
            </div>
            <div className="lending_infobox_items">
              <div className="lending_item_header">
                <div className="lending_item_number">2</div>
                <div className="lending_item_line"></div>
              </div>
              <div className="lending_item_text">Vetted dealers.</div>
            </div>
            <div className="lending_infobox_items">
              <div className="lending_item_header">
                <div className="lending_item_number">3</div>
              </div>
              <div className="lending_item_text_last">
                Simple plug and play solution to enable lending partners to
                easily expand into the renewable energy lending sector.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
