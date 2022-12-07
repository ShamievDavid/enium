import React, { useState } from "react";
import "./App.scss";
import { ContactForm } from "./features/ContactForm/ContactForm";
import { Main } from "./features/Main/Main";

function App() {
  const [showForm, setShowForm] = useState(false);

  const onContanctForm = () => {
    setShowForm(false);
  };

  return (
    <div className="app_container" onClick={showForm && onContanctForm}>
      <Main showForm={showForm} setShowForm={setShowForm} />
      {showForm && <ContactForm />}
    </div>
  );
}

export default App;
