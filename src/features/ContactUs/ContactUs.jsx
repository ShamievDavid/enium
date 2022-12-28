import React, { useRef, useState } from "react";
import "./ContactUs.scss";
import { useForm } from "react-hook-form";

import emailjs from "@emailjs/browser";
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "../../api/email";

export const ContactUs = ({ setShowForm, showForm }) => {
  const [sentMessage, setSentMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = (formData) => {
    sending();
    console.log("formData", formData);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, "#contact-form", USER_ID).then(
      () => {
        setSentMessage(true);
        setLoading(false);
        reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const sending = () => {
    console.log("send button works");
    setLoading(true);
  };

  const sentMessageView = (
    <div className="contact_us_container" onClick={(e) => e.stopPropagation()}>
      <div className="cf_content_sent">
        <div className="cf_header_back">
          <div className="cf_close" onClick={() => setShowForm(!showForm)}>
            ×
          </div>
          <div className="cf_title">
            Your message successfully sent! Thank you! Talk to you soon.
          </div>
        </div>

        <div className="cf_footer">
          <div className="cf_send_back" onClick={() => setShowForm(!showForm)}>
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
      onSubmit={handleSubmit(sendEmail)}
      className="contact_us_container"
      onClick={(e) => e.stopPropagation()}
      id="contact-form"
    >
      <div className="cf_header">
        <div className="cf_close" onClick={() => setShowForm(!showForm)}>
          ×
        </div>
        <div className="cf_title">Ask us a question or leave a message:</div>
      </div>
      <div className="cf_input_box">
        <select
          className="cf_input_name"
          type="text"
          name="reason"
          placeholder="Reason for contact"
          defaultValue="reason for contact"
          {...register("reason", { required: false })}
        >
          <option value="reason for contact" disabled>
            Reason for contact
          </option>
          <option value="general inquiry">General Inquiry</option>
          <option value="potential partners">Potential Partners</option>
          <option value="custumer feedback">Custumer Feedback</option>
        </select>
        <span className="cf_error"></span>
      </div>

      <div className="cf_input_box">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="cf_input_name"
          {...register("name", { required: "*required" })}
        />
        <span className="cf_error">{errors.name?.message}</span>
      </div>
      <div className="cf_input_box">
        <input
          type="email"
          name="email"
          className="cf_input_name"
          placeholder="Your email"
          {...register("email", { required: "*required" })}
        />
        <span className="cf_error">{errors.email?.message}</span>
      </div>
      <div className="cf_input_box">
        <input
          type="phone"
          name="phone"
          placeholder="Phone number (XXX) XXX–XXXX"
          className="cf_input_name"
          {...register("phone", { required: false })}
        />
        <span className="cf_error"></span>
      </div>
      <div className="cf_textarea_box">
        <textarea
          name="message"
          className="cf_input_name"
          placeholder="Your message"
          {...register("message", { required: "*required" })}
        />
        <span className="cf_error">{errors.message?.message}</span>
      </div>

      <div className="cf_footer">
        <input type="submit" value="Send" className="cf_send" />
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
