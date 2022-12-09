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
      <div className="lending_left">
        <div className="lending_logo">
          <img
            className="lending_img_logo"
            src="./assets/images/enium_white.png"
            alt="enium logo"
          />
        </div>
        <div className="lending_title ">LENDING PARTNERS</div>
      </div>

      <div className="lending_right">
        <div className="lending_right_header">
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
        <div className="lending_right_content">
          <div className="lending_rigth_text">
            Enium is always looking for forward thinking, innovative lending
            partners to expand our offering as we grow.
            <br />
            <br />
            Today, solar energy is attainable and affordable, benefiting you
            financially in the long run while also benefiting the environment.
            Solar is the key to energy freedom, a booming economy and a
            healthier planet.
          </div>
          <div className="lending_rigth_images_box">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="lending_rigth_infobox">
            <div className="lending_itembox">
              <div className="lending_item_header">
                <div className="lending_item_number">1</div>
                <div className="lending_item_line"></div>
              </div>
              <div className="lending_item_text">
                Constant flow of high quality loans of super-prime borrowers.
              </div>
            </div>
            <div className="lending_itembox">
              <div className="lending_item_header">
                <div className="lending_item_number">2</div>
                <div className="lending_item_line"></div>
              </div>
              <div className="lending_item_text">Vetted dealers.</div>
            </div>
            <div className="lending_itembox">
              <div className="lending_item_header">
                <div className="lending_item_number">3</div>
              </div>
              <div className="lending_item_text">
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
