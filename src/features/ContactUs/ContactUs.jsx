import React, { useRef, useState } from "react";
import "./ContactUs.scss";

import emailjs from "@emailjs/browser";
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "../../api/email";

export const ContactUs = ({ setShowForm, showForm }) => {
  const [sentMessage, setSentMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("form current", form.current);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        setSentMessage(true);
        setLoading(false);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const sending = () => {
    setLoading(true);
  };

  const sentMessageView = (
    <div className="contact_us_container" onClick={(e) => e.stopPropagation()}>
      <div className="cf_content_sent">
        <div className="cf_title">
          Your message successfully sent! Thank you! Talk to you soon.
        </div>
        <div className="cf_footer">
          <div className="cf_send" onClick={() => setShowForm(!showForm)}>
            Back
          </div>
          <img
            className="cf_logo"
            src="./assets/images/enium_s.png"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );

  const contactFormView = (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="contact_us_container"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="cf_title">Ask us a question or leave a message:</div>
      <input type="text" name="reason" placeholder="Reason for contact" />
      <input type="text" name="name" placeholder="Your name" />
      <input type="email" name="email" placeholder="Your email" />
      <input
        type="phone"
        name="phone"
        placeholder="Phone number (XXX) XXX–XXXX"
        className="input_last"
      />
      <textarea name="message" placeholder="Your message" />
      <div className="cf_footer">
        <button type="submit" className="cf_send" onClick={sending}>
          Send
        </button>
        <img
          className={loading ? "cf_logo_sending" : "cf_logo"}
          src="./assets/images/enium_s.png"
          alt="logo"
        />
      </div>
    </form>
  );
  return <>{sentMessage ? sentMessageView : contactFormView}</>;
};
