import React, { useState } from "react";
import "./App.scss";
import { ContactUs } from "./features/ContactUs/ContactUs";
import { Main } from "./features/Main/Main";
import { Dealers } from "./features/VideoBox/components/Dealers/Dealers";
import { Homeowners } from "./features/VideoBox/components/Homeowners/Homeowners";
import { LendingPartners } from "./features/VideoBox/components/LendingPartners/LendingPartners";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [homeowners, setHomeowners] = useState(false);
  const [lendingPartners, setLendingPartners] = useState(false);
  const [dealers, setDealers] = useState(false);

  console.log("dealers", dealers);

  const onContanctForm = () => {
    setShowForm(false);
  };

  return (
    <div
      className="app_container"
      onClick={showForm ? onContanctForm : undefined}
    >
      <Main
        showForm={showForm}
        setShowForm={setShowForm}
        homeowners={homeowners}
        setHomeowners={setHomeowners}
        lendingPartners={lendingPartners}
        setLendingPartners={setLendingPartners}
        dealers={dealers}
        setDealers={setDealers}
      />
      {showForm && <ContactUs showForm={showForm} setShowForm={setShowForm} />}
      {homeowners && (
        <Homeowners
          homeowners={homeowners}
          setHomeowners={setHomeowners}
          showForm={showForm}
          setShowForm={setShowForm}
        />
      )}
      {lendingPartners && (
        <LendingPartners
          lendingPartners={lendingPartners}
          setLendingPartners={setLendingPartners}
          showForm={showForm}
          setShowForm={setShowForm}
        />
      )}

      {dealers && (
        <Dealers
          dealers={dealers}
          setDealers={setDealers}
          showForm={showForm}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
}

export default App;
