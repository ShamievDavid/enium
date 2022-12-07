import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./ContactForm.scss";

export const ContactForm = ({ showForm, setShowForm }) => {
  const [gratitude, setGratitude] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const gratitudeView = (
    <div
      className="contact_form_container"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="cf_content_gratitude">
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

  const handleMine = () => {
    handleSubmit();
    setGratitude(false);
  };

  const formView = (
    <form
      className="contact_form_container"
      onClick={(e) => e.stopPropagation()}
      onSubmit={handleMine}
    >
      <div className="cf_content">
        <div className="cf_title">Ask us a question or leave a message:</div>
        <div className="inputs">
          <input {...register("reason")} placeholder="Reason for contact" />
          <input
            {...register("name", { required: "Required" })}
            placeholder="Your name"
          />
          <div className="cf_error">{errors.name?.message}</div>
          <input
            {...register("email", { required: "Required" })}
            placeholder="Your email"
          />
          <div className="cf_error">{errors.email?.message}</div>
          <input
            {...register("phone")}
            placeholder="Phone number (XXX) XXX–XXXX"
          />
          <textarea
            {...register("message", { required: "Required" })}
            placeholder="Your message"
          />
          <div className="cf_error">{errors.message?.message}</div>
        </div>
        <div className="cf_footer">
          <button type="submit" className="cf_send">
            Send
          </button>
          <img
            className="cf_logo"
            src="./assets/images/enium_s.png"
            alt="logo"
          />
        </div>
      </div>
    </form>
  );
  return <>{gratitude ? formView : gratitudeView}</>;
};
