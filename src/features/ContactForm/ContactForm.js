import React from "react";
import "./ContactForm.scss";

export const ContactForm = () => {
  return (
    <div className="contact_form_container">
      <div className="cf_content">
        <div className="cf_title">Ask us a question or leave a message:</div>
        <input placeholder="Reason for contact" />
        <input placeholder="Your name" />
        <input placeholder="Your email" />
        <input placeholder="Phone number (XXX) XXX–XXXX" />
        <textarea placeholder="Your message" />
      </div>
    </div>
  );
};
