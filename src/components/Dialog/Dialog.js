import React from "react";
import "./Dialog.scss";

export const MyDialog = ({ isOpen, setIsOpen }) => {
  return (
    <div className="dialog-container">
      <div className="dialog-content">My dialog window</div>
      <div onClick={() => setIsOpen(!isOpen)}>close</div>
    </div>
  );
};
