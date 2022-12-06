import React, { useState } from "react";
import "./App.css";
import { ContactForm } from "./features/ContactForm/ContactForm";
import { Main } from "./features/Main/Main";

function App() {
  const [showForm, setShowForm] = useState(false);
  console.log("showForm", showForm);
  return (
    <div className="app_container">
      <Main showForm={showForm} setShowForm={setShowForm} />
      {showForm && <ContactForm />}
    </div>
  );
}

export default App;
