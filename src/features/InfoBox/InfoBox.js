import "./InfoBox.scss";

export const InfoBox = ({ showForm, setShowForm }) => {
  return (
    <div className="info">
      <div className="navigation">
        <div className="title">
          <img
            className="logotype"
            src="./assets/images/enium_concept.png"
            alt="enium logo"
          />
        </div>
        <div className="nav-menu">
          <div className="nav-link">INSTAGRAM</div>
          <div className="nav-link">FACEBOOK</div>
          <div className="nav-link">LINKEDIN</div>
          <div className="nav-contact" onClick={() => setShowForm(!showForm)}>
            CONTACT US
          </div>
        </div>
      </div>
      <div className="info_footer">
        <div className="info_footer_header">
          <div className="infobox_img_container">
            <img
              className="logo"
              src="./assets/images/enium_logo_black.png"
              alt="logo"
            />
          </div>
          <div className="description_title">ECG</div>
        </div>
        <div className="description">
          <div className="empty_block"></div>
          <div className="description_text">
            <br />
            Enium is committed to presenting innovative ways for each customer
            to be environmentally aware and fiscally responsible by providing
            finance solutions with integrity to every customer one project at a
            time. <br />
            <br />
            At Enium, we are passionate about connecting customers and
            contractors with terrific loan programs to improve the quality of
            life of all those within our reach.
          </div>
        </div>
      </div>
    </div>
  );
};
