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
    <div
      className="app_container"
      onClick={showForm ? onContanctForm : undefined}
    >
      <Main showForm={showForm} setShowForm={setShowForm} />
      {showForm && (
        <ContactForm showForm={showForm} setShowForm={setShowForm} />
      )}
    </div>
  );
}

export default App;
